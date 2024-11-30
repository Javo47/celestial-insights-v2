const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const ORIGIN_1 = process.env.ORIGIN_1;
const ORIGIN_2 = process.env.ORIGIN_2;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [ORIGIN_1, ORIGIN_2],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

mongoose.connect(MONGODB_URI);

//Adding for push and redeploy
app.get("/", cors(), (req, res) => {
  res.json(`${PORT}`);
});

app.get("/getUsers", cors(), (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", cors(), (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", cors(), (req, res) => {
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

app.delete("/deleteUser/:id", cors(), (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/createUser", cors(), (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", cors(), (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
