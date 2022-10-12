const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const md5 =require("md5");

const multer = require('multer');
const upload = multer();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const fs = require('fs');
const { Readable } = require('stream');
const readline = require ('readline');
const {google} = require('googleapis');
// service account key file from Google Cloud console.
const KEYFILEPATH = 'cryptic-lattice-361623-36680065feaa.json';

// Request full drive access.
const SCOPES = ['https://www.googleapis.com/auth/drive'];
// Create a service account initialize with the service account key file and scope needed
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES
});

//app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "sadib",
});

app.post("/registro", (req,res) =>{

  const usuario = req.body.usuario
  const nombre = req.body.nombre
  const papellido = req.body.papellido
  const sapellido = req.body.sapellido
  const correo = req.body.correo
  const telefono = req.body.telefono
  const contrasenia = md5(req.body.contrasenia);

  db.query(
    "INSERT INTO psicologo (id_psic,nombre,apellidop,apellidom,correo,telefono,rol) VALUES(?,?,?,?,?,?,2)",[usuario,nombre,papellido,sapellido,correo,telefono],(err,result) => { console.log(err); }
  );

  db.query(
    "INSERT INTO login (id_usuario,correo,contrasenia) VALUES(?,?,?)",[usuario,correo,contrasenia],(err,result) => { console.log(err); }
  );
});

app.get("/login", (req, res) => {
  console.log(req.session.user);

  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.get('/logout',  (req, res) => {
  console.log("Cierre sesion: "+req.session.user);
  if (req.session.user) {
      delete req.session.user;
      res.send({result: 'SUCCESS'});
  } else {
      res.send({result: 'ERROR', message: 'User is not logged in.'});
  }
});

app.post("/login", (req,res) =>{
  
  const correo = req.body.correo;
  const contrasenia = md5(req.body.contrasenia);
  
  db.query(
    "SELECT nombre, apellidop, apellidop,apellidom, telefono, rol, id_usuario, login.correo, login.contrasenia FROM login, psicologo WHERE login.correo = ? and login.contrasenia = ?;",
    [correo,contrasenia],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
      } else {
        res.send({ message: "No se encuentra este usuario" });
      }
    }
  );
});

function getId(min, max) {
  return Math.random() * (max - min) + min;
}

app.post("/create", (req,res) =>{

  //Datos del tutor
  const id_tutor = getId(100000,999999);
  const tnombre = req.body.tnombre
  const tpapellido = req.body.tpapellido
  const tsapellido = req.body.tsapellido
  const temail = req.body.temail
  const ttelefono = req.body.ttelefono

  //Datos del paciente
  const id_paciente=getId(100000,999999);
  const nombre = req.body.pnombre
  const papellido = req.body.ppapellido
  const sapellido = req.body.psapellido
  const fecha_nac = req.body.pfnacimiento
  const genero = req.body.pgenero
  const email = req.body.pemail
  const telefono = req.body.ptelefono

  db.query(
    "INSERT INTO tutor (id_tutor,nombre,apellidop,apellidom,correo,telefono) VALUES(?,?,?,?,?,?)",[id_tutor,tnombre,tpapellido,tsapellido,temail,ttelefono],(err,result) => { console.log(err); }
  );

  db.query(
    "INSERT INTO paciente (id_paci,nombre,apellidop,apellidom,fecha_nac,genero,correo,telefono,id_tutor,rol,id_psic) VALUES(?,?,?,?,?,?,?,?,?,?,?)",[id_paciente,nombre,papellido,sapellido,fecha_nac,genero,email,telefono,id_tutor,0,req.session.user[0].id_usuario],(err,result) => { console.log(err); }
  );
  
});

app.put("/update", (req,res) =>{

  const id_paci=req.body.id_paci;

  //Datos del tutor
  const tnombre = req.body.tnombre
  const tpapellido = req.body.tpapellido
  const tsapellido = req.body.tsapellido
  const temail = req.body.temail
  const ttelefono = req.body.ttelefono

  //Datos del paciente
  const nombre = req.body.pnombre
  const papellido = req.body.ppapellido
  const sapellido = req.body.psapellido
  const fecha_nac = req.body.pfnacimiento
  const genero = req.body.pgenero
  const email = req.body.pemail
  const telefono = req.body.ptelefono

  db.query(
    "UPDATE tutor SET nombre=?,apellidop=?,apellidom=?,correo=?,telefono=? WHERE id_tutor IN (SELECT id_tutor FROM paciente WHERE id_paci=?)",[tnombre,tpapellido,tsapellido,temail,ttelefono,id_paci],(err,result) => { console.log(err); }
  );

  db.query(
    "UPDATE paciente SET nombre=?,apellidop=?,apellidom=?,fecha_nac=?,genero=?,correo=?,telefono=? WHERE id_paci=?",[nombre,papellido,sapellido,fecha_nac,genero,email,telefono,id_paci],(err,result) => { console.log(err); }
  );
  
});

app.get("/pacientes", (req,res) =>{

  db.query(
    "SELECT id_paci,apellidop,apellidom,nombre FROM paciente",(err,result) => { console.log(err); res.send(JSON.stringify(result));}
  );
});

app.get("/obtenerDatos",(req,res)=>{

  const id_paci= req.query;
  
  db.query(
    "SELECT paciente.nombre,paciente.apellidop,paciente.apellidom,CONCAT(YEAR(fecha_nac),'-',DATE_FORMAT(fecha_nac,'%m'),'-',DATE_FORMAT(fecha_nac,'%d')) as fecha_nac,genero,paciente.correo,paciente.telefono,tutor.nombre AS nombret,tutor.apellidop AS apellidopt,tutor.apellidom AS apellidomt,tutor.correo AS correot,tutor.telefono AS telefonot FROM paciente INNER JOIN tutor ON paciente.id_tutor=tutor.id_tutor AND id_paci=?;",[id_paci.id_paci],(err,result) => { console.log(err); res.send(JSON.stringify(result));}
  );
});

app.put("/editarPsic", (req,res) =>{

  const usuario = req.body.usuario
  const nombre = req.body.nombre
  const papellido = req.body.papellido
  const sapellido = req.body.sapellido
  const correo = req.body.correo
  const telefono = req.body.telefono
  const contrasenia = md5(req.body.contrasenia);


  db.query(
    "UPDATE psicologo SET nombre=?,apellidop=?,apellidom=?,correo=?,telefono=? WHERE id_psic=?",[nombre,papellido,sapellido,correo,telefono,usuario],(err,result) => { console.log(); }
  );

  db.query(
    "UPDATE login SET correo=?, contrasenia=? WHERE id_usuario=?",[correo,contrasenia,usuario],(err,result) => { console.log(err); }
  );
  db.query(
    "SELECT nombre, apellidop, apellidop,apellidom, telefono, rol, id_usuario, login.correo, login.contrasenia FROM login, psicologo WHERE id_usuario = ?;",
    [usuario],
    (err, result) => {
      
            req.session.user = result;
            res.send(result);
    }
  );
});

app.get("/editarPsic", (req, res) => {
  console.log(req.session.user);

  if (req.session.user) {
    res.send({ user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.get("/datosPaciente",(req,res)=>{
  console.log();
  db.query(
    "SELECT * from paciente where id_psic=?",req.session.user[0].id_usuario,(err, result)=>{
      res.send(result);
      
      console.log(result);
    }
  );
});

app.post("/asignarPrueba", (req,res) =>{
  
  const token = req.body.token
  const paciente = req.body.paciente
  const prueba1 = req.body.prueba1
  const prueba = req.body.prueba
  console.log("HTP"+prueba1);
  console.log("TAMAI"+prueba);

  if(prueba1!=""){
    db.query(
      "INSERT INTO token (token,id_psic,id_paci,id_prueba,fecha,estado) VALUES(?,?,?,?,now(),'Asignado')",[token,req.session.user[0].id_usuario,paciente,prueba1],(err,result) => { console.log(err); }
    );
  }
  else{
    db.query(
      "INSERT INTO token (token,id_psic,id_paci,id_prueba,fecha,estado) VALUES(?,?,?,?,now(),'Asignado')",[token,req.session.user[0].id_usuario,paciente,prueba],(err,result) => { console.log(err); }
    );
  }

});

app.post("/dibujo", upload.single('dibujo'), (req,res)=>{
  //console.log(Readable.from(req.file.buffer));
  createAndUploadFile(auth,req.file).catch(console.error);

});

async function createAndUploadFile(auth,dibujo){
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); 
  let yyyy = today.getFullYear();
  let hh = String(today.getHours());
  let min = String(today.getMinutes());
  let ss = String(today.getSeconds());

  filename = mm + '-' + dd + '-' + yyyy +'-'+hh+ '-'+min+'-'+ss+ '.jpg';
  const driveService = google.drive(  {version:'v3',auth});
    
  let fileMetadata = {
    'name': filename,
    'parents':  [  '1WF_S3p_S6TJht9NCRs94MMcW3nKuC2Eu'  ]
  };
  let media = {
    mimeType: 'image/jpeg',
    body:Readable.from(dibujo.buffer)
  };


  let response = await driveService.files.create({
  resource: fileMetadata,
  media: media,
  fields: 'id'
  })

  switch(response.status){
  case 200:
      let file = response.result;
      console.log('Created File Id: ', response.data.id);
      break;
  default:
      console.error('Error creating the file, ' + response.errors);
      break;
  }
}


app.listen(3001, () => {
  console.log("Servidor corriendo");
});