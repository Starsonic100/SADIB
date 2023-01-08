const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const md5 =require("md5");
const pdf = require('html-pdf');
const multer = require('multer');
const upload = multer();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const fs = require('fs');
const { Readable } = require('stream');
const readline = require ('readline');
const {google} = require('googleapis');
const tf = require('@tensorflow/tfjs-node');
// service account key file from Google Cloud console.
const KEYFILEPATH = 'cryptic-lattice-361623-36680065feaa.json';
const pdfTemplate = require('./documentos');
const pdfTemplate2 = require('./documentosTAMAI');
const plantillaResTAMAI = require('./resultadosTAMAI');
const plantillaResHTP = require('./resultadosHTP');
// Request full drive access.
const SCOPES = ['https://www.googleapis.com/auth/drive'];
// Create a service account initialize with the service account key file and scope needed
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES
});

let modeloArbol=null;
let modeloCasa=null;
let modeloPersona=null;


//app.use(cors());
app.use(express.json({ limit: '200mb' }));
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
    "SELECT nombre, apellidop, apellidom, telefono, rol, id_usuario, login.correo, login.contrasenia  FROM login INNER JOIN psicologo ON psicologo.id_psic = login.id_usuario WHERE login.correo = ? and login.contrasenia = ?;",
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

app.get("/access", (req, res) => {
  console.log(req.session.user);

  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/access", (req,res) =>{
  
  const codigo = req.body.codigo;
  db.query(
    "SELECT * from token INNER JOIN paciente ON paciente.id_paci = token.id_paci WHERE token = ? AND estado = 'Asignado';",
    codigo,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
      } else {
        res.send({ message: "No se puede acceder a la prueba" });
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
    "INSERT INTO paciente (id_paci,nombre,apellidop,apellidom,fecha_nac,genero,correo,telefono,id_tutor,rol,id_psic) VALUES(?,?,?,?,?,?,?,?,?,?,?)",[id_paciente,nombre,papellido,sapellido,fecha_nac,genero,email,telefono,id_tutor,3,req.session.user[0].id_usuario],(err,result) => { console.log(err); }
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
  console.log(fecha_nac);

  db.query(
    "UPDATE tutor SET nombre=?,apellidop=?,apellidom=?,correo=?,telefono=? WHERE id_tutor IN (SELECT id_tutor FROM paciente WHERE id_paci=?)",[tnombre,tpapellido,tsapellido,temail,ttelefono,id_paci],(err,result) => { console.log(err); }
  );
    console.log("Tutor actualizado");
  db.query(
    "UPDATE paciente SET nombre=?,apellidop=?,apellidom=?,fecha_nac=?,genero=?,correo=?,telefono=? WHERE id_paci=?",[nombre,papellido,sapellido,fecha_nac,genero,email,telefono,id_paci],(err,result) => { console.log(err); }
  );
  
});

app.get("/pacientes", (req,res) =>{ 

  db.query(
    "SELECT id_paci,apellidop,apellidom,nombre FROM paciente where id_psic=?",req.session.user[0].id_usuario,(err,result) => { console.log(err); res.send(JSON.stringify(result));}
  );
});

app.get("/obtenerDatos",(req,res)=>{

  const id_paci= req.query;
  
  db.query(
    "SELECT paciente.nombre,paciente.apellidop,paciente.apellidom,CONCAT(YEAR(fecha_nac),'-',DATE_FORMAT(fecha_nac,'%m'),'-',DATE_FORMAT(fecha_nac,'%d')) as fecha_nac,genero,paciente.correo,paciente.telefono,tutor.nombre AS nombret,tutor.apellidop AS apellidopt,tutor.apellidom AS apellidomt,tutor.correo AS correot,tutor.telefono AS telefonot FROM paciente INNER JOIN tutor ON paciente.id_tutor=tutor.id_tutor AND paciente.id_paci=?;",[id_paci.id_paci],(err,result) => 
    { 
      console.log(err); 
      res.send(JSON.stringify(result));
      console.log(result);
    }
  );
});

app.get("/obtenerExpediente",(req,res)=>{

  const id_paci= req.query;
  
  db.query(
    "SELECT token.token, respuesta.respuesta, resultado.resultado, prueba.nombre, estado FROM token INNER JOIN resultado ON token.id_token=resultado.id_token INNER JOIN respuesta ON resultado.id_token=respuesta.id_token INNER JOIN prueba ON prueba.id_prueba=token.id_prueba WHERE id_paci=?;",[id_paci.id_paci],(err,result) => 
    { 
      console.log(err); 
      if(result.length>0){
        res.send(JSON.stringify(result));
      }
      else{
        res.send({ message: "No se cuenta con expediente" });
      }
      console.log(result);
    }
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

app.post("/respuestasHTP", (req,res) =>{
  let nombre = req.session.user[0].nombre+req.session.user[0].apellidop+req.session.user[0].apellidom;
  let respuestas = req.body.respuestas;
  let fileName= nombre+'respuestasHTP.pdf';
  let table = 'respuesta';
  let token = req.session.user[0].id_token;
  let prueba =  req.session.user[0].id_prueba;
  let parent='1SpsHIylqeQpfPdSySqHFJ55jojxnu854';

  const fs = require('fs');
  pdf.create(pdfTemplate(respuestas), {"format": 'Letter', "border": {
    "top": "25mm",            
    "bottom": "25mm"
  },
 }).toBuffer(function (err, buffer) {
    if (err) {
      console.log(err)
    } else {
      console.log(buffer)
      createAndUploadPDF(auth,buffer,fileName,parent,table,token,prueba).catch(console.error());
      res.send(Promise.resolve());
    }
  });
});

app.post("/respuestasTAMAI", (req,res) =>{
  let nombre = req.session.user[0].nombre+req.session.user[0].apellidop+req.session.user[0].apellidom;
  let respuestas = req.body.respuestas;
  let fileName= nombre+'respuestasTAMAI.pdf';
  let table = 'respuesta';
  let token = req.session.user[0].id_token;
  let prueba =  req.session.user[0].id_prueba;
  let parent='1SpsHIylqeQpfPdSySqHFJ55jojxnu854';
  const fs = require('fs');
  pdf.create(pdfTemplate2(respuestas), {"format": 'Letter', "border": {
    "top": "25mm",            // default is 0, units: mm, cm, in, px
    "bottom": "25mm",
  },
 }).toBuffer(function (err, buffer) {
    if (err) {
      console.log(err)
    } else {
      console.log(buffer)
      createAndUploadPDF(auth,buffer,fileName,parent,table,token,prueba).catch(console.error());
      res.send(Promise.resolve());
    }
  });
});

app.post("/resultadosTAMAI", (req,res) =>{
  let nombre = req.session.user[0].nombre+req.session.user[0].apellidop+req.session.user[0].apellidom;
  let pac = req.session.user[0].nombre+" "+req.session.user[0].apellidop+" "+req.session.user[0].apellidom;
  let fecha_nac = req.session.user[0].fecha_nac;
  let fechaNac=fecha_nac.substring(0,10);
  let fecha=new Date(fechaNac);
  let mes_dif = Date.now()-fecha.getTime();
  let edad_dif=new Date(mes_dif);
  let anio =edad_dif.getUTCFullYear();
  let edad=Math.abs(anio-1970);
  let genero = req.session.user[0].genero;
  let resultados = req.body.resTAMAI;
  let today_local = new Date().toLocaleDateString("en-US", {timeZone: "America/Mexico_City"});
  let today = new Date(today_local);
  console.log(today);
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); 
  let yyyy = today.getFullYear();
  let fileName= nombre+'resultadoTAMAI.pdf';
  let table = 'resultado';
  let token = req.session.user[0].id_token;
  let prueba =  req.session.user[0].id_prueba;
  let parent='1W3XJfBUoWmPDfjkS7bjjbdZANRJnrOI0';
  const fs = require('fs');
  db.query(
    "UPDATE token SET estado=? WHERE id_token=?",['Resuelto',token],(err,result) => { console.log(err);
    console.log("Actualizado"); }
  );
  pdf.create(plantillaResTAMAI(resultados,dd,mm,yyyy,pac,edad,genero), {"format": 'Letter', "border": {
    "top": "25mm",            // default is 0, units: mm, cm, in, px
    "bottom": "25mm",
  },
 }).toBuffer(function (err, buffer) {
    if (err) {
      console.log(err)
    } else {
      console.log(buffer)
      createAndUploadPDF(auth,buffer,fileName,parent,table,token,prueba).catch(console.error());
      res.send(Promise.resolve());
    }
});
});

app.post("/resultadosHTP", (req,res) =>{
  let nombre = req.session.user[0].nombre+req.session.user[0].apellidop+req.session.user[0].apellidom;
  let pac = req.session.user[0].nombre+" "+req.session.user[0].apellidop+" "+req.session.user[0].apellidom;
  let fecha_nac = req.session.user[0].fecha_nac;
  let fechaNac=fecha_nac.substring(0,10);
  let fecha=new Date(fechaNac);
  let mes_dif = Date.now()-fecha.getTime();
  let edad_dif=new Date(mes_dif);
  let anio =edad_dif.getUTCFullYear();
  let edad=Math.abs(anio-1970);
  let genero = req.session.user[0].genero;
  let resultados = req.body.respuestas;
  let today_local = new Date().toLocaleDateString("en-US", {timeZone: "America/Mexico_City"});
  let today = new Date(today_local);
  console.log(today);
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); 
  let yyyy = today.getFullYear();
  let fileName= nombre+'resultadoHTP.pdf';
  let table = 'resultado';
  let token = req.session.user[0].id_token;
  let prueba =  req.session.user[0].id_prueba;
  let parent='1W3XJfBUoWmPDfjkS7bjjbdZANRJnrOI0';
  const fs = require('fs');
  db.query(
    "UPDATE token SET estado=? WHERE id_token=?",['Resuelto',token],(err,result) => { console.log(err);
    console.log("Actualizado"); }
  );
  pdf.create(plantillaResHTP(resultados,dd,mm,yyyy,pac,edad,genero), {"format": 'Letter', "border": {
    "top": "25mm",            // default is 0, units: mm, cm, in, px
    "bottom": "25mm",
  },
 }).toBuffer(function (err, buffer) {
    if (err) {
      console.log(err)
    } else {
      console.log(buffer)
      createAndUploadPDF(auth,buffer,fileName,parent,table,token,prueba).catch(console.error());
      res.send(Promise.resolve());
    }
});
});

app.post("/asignarPrueba", (req,res) =>{
  
  const token = req.body.token
  const paciente = req.body.paciente
  const prueba1 = req.body.prueba1
  const prueba = req.body.prueba
  let id = 0;
  let LII='LAST_INSERT_ID()'
  console.log("HTP"+prueba1);
  console.log("TAMAI"+prueba);
  
  if(prueba1!=""){
    db.query(
      "INSERT INTO token (token,id_psic,id_paci,id_prueba,fecha,estado) VALUES(?,?,?,?,now(),'Asignado')",[token,req.session.user[0].id_usuario,paciente,prueba1],(err,result) => { console.log(err); }
    );
    db.query(
      "SELECT LAST_INSERT_ID() as id_token;",(err,result)=>{
        let jsonRes=JSON.parse(JSON.stringify(result[0]));
        id=jsonRes.id_token;
        console.log(id);
        db.query(
          "INSERT INTO respuesta (id_prueba,id_token,respuesta) VALUES(?,?,'Sin resolver')",[prueba1,id],(err,result) => { console.log(err); }    
        );
        db.query(
          "INSERT INTO resultado (id_prueba,id_token,resultado) VALUES(?,?,'Sin resolver')",[prueba1,id],(err,result) => { console.log(err); }
        );
      }
    );
  }
  else{
    db.query(
      "INSERT INTO token (token,id_psic,id_paci,id_prueba,fecha,estado) VALUES(?,?,?,?,now(),'Asignado')",[token,req.session.user[0].id_usuario,paciente,prueba],(err,result) => 
      { 
        console.log(err); 
      }
    );
    db.query(
      "SELECT LAST_INSERT_ID() as id_token;",(err,result)=>{
        let jsonRes=JSON.parse(JSON.stringify(result[0]));
        id=jsonRes.id_token;
        db.query(
          "INSERT INTO respuesta (id_prueba,id_token,respuesta) VALUES(?,?,'Sin resolver')",[prueba,id],(err,result) => { console.log(err); }    
        );
        db.query(
          "INSERT INTO resultado (id_prueba,id_token,resultado) VALUES(?,?,'Sin resolver')",[prueba,id],(err,result) => { console.log(err); }
        );
      }
    );
  }

});


app.post("/analisisCasa",(req,res)=>{
  console.log(req.body);
  const arr= req.body.arreglo;
  let resultado=null;
  var tensor4 = tf.tensor4d(arr);
                var resultados = modeloCasa.predict(tensor4).dataSync();
                var mayorIndice = resultados.indexOf(Math.max.apply(null, resultados));
                // Clasificación del resultado
                if(mayorIndice==0){
                  console.log('Extroversión');   
                  resultado='Extroversión';             
                }else if(mayorIndice==1){
                  console.log('Dependencia');
                  resultado='Dependencia';                   
                }else if(mayorIndice==2){
                  console.log('Problemas Familiares');  
                  resultado='rDc','Problemas Familiares';                 
                }
                //Datos para debuggear
                console.log("Prediccion", mayorIndice);
                console.log("Prediccion", resultados);
  res.send(resultado)
});

app.post("/analisisArbol",(req,res)=>{
  console.log(req.body);
  const arr= req.body.arreglo;
  let resultado=null;
  
  var tensor4 = tf.tensor4d(arr);
  var resultados = modeloArbol.predict(tensor4).dataSync();
  var mayorIndice = resultados.indexOf(Math.max.apply(null, resultados));
  // Clasificación del resultado
  if(mayorIndice==0){
    resultado='Autocontrol';
    console.log('Autocontrol');                
  }else if(mayorIndice==1){
    resultado='rDa','Inseguridad';
    console.log('Inseguridad');                
  }
  //Datos para debuggear
  console.log("Prediccion", mayorIndice);
  console.log("Prediccion", resultados);
  res.send(resultado)
});

app.post("/analisisPersona",(req,res)=>{
  console.log(req.body);
  const arr= req.body.arreglo;
  let resultado=null;
  
  var tensor4 = tf.tensor4d(arr);
  var resultados = modeloPersona.predict(tensor4).dataSync();
  var mayorIndice = resultados.indexOf(Math.max.apply(null, resultados));
  // Clasificación del resultado
  if(mayorIndice==0){
    resultado='Narcisismo';
    console.log('Narcisismo');                
  }else if(mayorIndice==1){
    resultado='Aislamiento';
    console.log('Aislamiento');                
  }
  //Datos para debuggear
  console.log("Prediccion", mayorIndice);
  console.log("Prediccion", resultados);
  res.send(resultado)
});

app.post("/dibujoCasa", upload.single('dibujo'), (req,res)=>{
  //console.log(Readable.from(req.file.buffer));
  createAndUploadFile(auth,req.file,'1f3MqFKUIB_CBkh6J0to9pek97LMdqafo').catch(console.error);

});

app.post("/dibujoPersona", upload.single('dibujo'), (req,res)=>{
  //console.log(Readable.from(req.file.buffer));
  createAndUploadFile(auth,req.file,'11IMwMCGtXQ8ELLsLNxvI4cy1YCBVw4gb').catch(console.error);

});

app.post("/dibujoArbol", upload.single('dibujo'), (req,res)=>{
  //console.log(Readable.from(req.file.buffer));
  createAndUploadFile(auth,req.file,'16CxAMgKQBKzc69dASFDwMht4kDqcp_LP').catch(console.error);
  
});

async function createAndUploadFile(auth,dibujo,parents){
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
    'parents':  [  parents  ]
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


async function createAndUploadPDF(auth,buffer,fileName,parent,table,token,prueba){
  const driveService = google.drive(  {version:'v3',auth});
    
  let fileMetadata = {
    'name': fileName,
    'parents':  [  parent  ]
  };
  let media = {
    mimeType: "application/pdf",
    body:Readable.from(buffer)
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
        let link='https://drive.google.com/file/d/'+response.data.id+'/view';
        db.query(
          "UPDATE "+ table+ " SET "+ table +"=? WHERE id_token=?",[link,token],(err,result) => { console.log(err); }
        );
        break;
    default:
        console.error('Error creating the file, ' + response.errors);
        break;
    }
}

async function cargarModelo(){
  console.log("Cargando modelo de Arbol");
  const modeloA = await tf.loadLayersModel('https://raw.githubusercontent.com/Starsonic100/modelos-sadib/master/ModelosArbol/model.json');
  console.log("Modelo de Arbol cargado");
  console.log("Cargando modelo de Casa");
  const modeloC = await tf.loadLayersModel('https://raw.githubusercontent.com/Starsonic100/modelos-sadib/master/ModelosCasa/model.json');
  console.log("Modelo de Casa cargado");
  console.log("Cargando modelo de Persona");
  const modeloP = await tf.loadLayersModel('https://raw.githubusercontent.com/Starsonic100/modelos-sadib/master/ModelosPersona/model.json');
  console.log("Modelo de Persona cargado");
  modeloArbol=modeloA;
  modeloCasa=modeloC;
  modeloPersona=modeloP;
}


app.listen(3001, () => {
  console.log("Servidor corriendo");
  cargarModelo();
});