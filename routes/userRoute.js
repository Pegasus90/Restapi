const express = require("express");

//creating router and importing the User(user) schema
const router = express.Router();
const User = require("../models/User");

//Post a User
router.post("/newUser", (req, res) => {
  let newUser = new User(req.body);
  newUser
    .save()
    .then((User) => res.status(201).send(User))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ msg: "ERROR POSTING A User" });
    });
});

//Get all Users
router.get("/", (req, res) => {
  User.find()
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ msg: "CAN'T GET A User!" });
    });
});

//Update a User by Id
router.put("/:id", (req, res) => {
  let updatedUser = req.body;
  User.findByIdAndUpdate(req.params.id, updatedUser)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ msg: "CAN'T UPDATE A User!" });
    });
});

//Delete a User by Id
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ msg: "CAN'T DELETE A User!" });
    });
});

module.exports = router;
