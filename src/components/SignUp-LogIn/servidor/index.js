const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const md5 =require("md5");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");


app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
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
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: "1234",
  password: "root",
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

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req,res) =>{
  
  const correo = req.body.correo;
  const contrasenia = md5(req.body.contrasenia);
  
  db.query(
    "SELECT * FROM login WHERE correo = ? and contrasenia = ?;",
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


app.post("/access", (req,res) =>{
  
  const correo = req.body.correo;
  const contrasenia = md5(req.body.contrasenia);
  
  db.query(
    "SELECT * FROM token WHERE token = ?;",
    correo,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
        res.send({message: "Accederá a la prueba"});
          
      } else {
        res.send({ message: "No se encuentra este paciente" });
      }
    }
  );
});


app.listen(3001, () => {
  console.log("Servidor corriendo");
});