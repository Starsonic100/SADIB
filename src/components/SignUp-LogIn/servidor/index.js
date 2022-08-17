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
    "INSERT INTO psicologo (id_psic,nombre,apellidop,apellidom,correo,telefono,contrasenia) VALUES(?,?,?,?,?,?,?)",[usuario,nombre,papellido,sapellido,correo,telefono,contrasenia],(err,result) => { console.log(err); }
  );

});

app.post("/login", (req,res) =>{
  
  const correo = req.body.correologin;
  const contrasenia = md5(req.body.contrasenialogin);
  
  db.query(
    "SELECT * FROM login WHERE correo = ? AND contrasenia = ?",[correo,contrasenia],(err,result) => {
      if(err){
        res.send({err: err})
      }

      if(result.length>0){
        res.send(result)
      }else{
        res.send("Sesión no iniciada, vuelva a intentarlo")
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Servidor corriendo");
});