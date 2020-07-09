const express = require("express"),
  bodyParser = require("body-parser"),
  connectDB = require("../config/db"),
  passport = require("passport"),
  cors = require("cors");

let app = express(),
  session = require("express-session"),
  fileRoutes = require("../routes/files.routes"),
  userRoutes = require("../routes/users.routes"),
  courseRoutes = require("../routes/courses.routes"),
  db = connectDB(),
  sess = {
    //SESSION CONFIG
    secret: process.env.KEY_SESSION,
    resave: false,
    saveUninitialized: true,
    name: "sessionID",
    cookie: {
      httpOnly: false,
      maxAge: parseInt(process.env.TIME),
    },
  },
  corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
  };

app.use(
  bodyParser.urlencoded({
    extended: false, //CONSULTAR QUE ES EXTENDED TRUE
  })
);
app.use(bodyParser.json());

//Cors configuration
app.use(cors(corsOptions));

//Session
app.use(session(sess));

//Passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/api", fileRoutes);
app.use("/api", userRoutes);
app.use("/api", courseRoutes);

module.exports = app;
