const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "sadib",
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
    "INSERT INTO paciente (id_paci,nombre,apellidop,apellidom,fecha_nac,genero,correo,telefono,id_tutor) VALUES(?,?,?,?,?,?,?,?,?)",[id_paciente,nombre,papellido,sapellido,fecha_nac,genero,email,telefono,id_tutor],(err,result) => { console.log(err); }
  );
  
});

app.post("/update", (req,res) =>{

  const id_paciente=301909;

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
    "UPDATE tutor SET nombre=?,apellidop=?,apellidom=?,correo=?,telefono=? WHERE id_tutor IN (SELECT id_tutor FROM paciente WHERE id_paci=?)",[tnombre,tpapellido,tsapellido,temail,ttelefono,id_paciente],(err,result) => { console.log(err); }
  );

  db.query(
    "UPDATE paciente SET nombre=?,apellidop=?,apellidom=?,fecha_nac=?,genero=?,correo=?,telefono=? WHERE id_paci=?",[nombre,papellido,sapellido,fecha_nac,genero,email,telefono,id_paciente],(err,result) => { console.log(err); }
  );
  
});

//Para inicar servidor
app.listen(3002, () => {
  console.log("Servidor para CRUD corriendo");
});