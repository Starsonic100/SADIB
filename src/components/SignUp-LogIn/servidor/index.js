const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const md5 =require("md5");

app.use(cors());
app.use(express.json());

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
    "INSERT INTO psicologo (id_psic,nombre,apellidop,apellidom,correo,telefono) VALUES(?,?,?,?,?,?)",[usuario,nombre,papellido,sapellido,correo,telefono],(err,result) => { console.log(err); }
  );

  db.query(
    "INSERT INTO login (id_usuario,correo,contrasenia) VALUES(?,?,?)",[usuario,correo,contrasenia],(err,result) => { console.log(err); }
  );
});

app.listen(3001, () => {
  console.log("Servidor corriendo");
});