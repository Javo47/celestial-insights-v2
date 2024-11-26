const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors(
  {
    origin: ["https://celestial-insights-v2.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
  }

));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://javo47:FAfxJSZyZ1GSowTG@cluster0.7we9r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getUsers", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      sign: req.body.sign,
      lNumber: req.body.lNumber,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success!");
      } else {
        res.json("The password is incorrect..");
      }
    } else {
      res.json("User not found.");
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001!!");
});
