const chalk = require("chalk")
const express = require("express")

const Toll = require("../../models/toll")

const router = express.Router()

router.get("/", (req, res) => {
  Toll.find()
    .then((tolls) => res.json(tolls))
    .catch((err) => {
      console.log(chalk.red(err))
      res.status(500).json({ message: "Something went wrong" })
    })
})

router.get("/:id", (req, res) => {
  Toll.findOne({ _id: req.params.id })
    .then((toll) => res.json(toll))
    .catch((err) => {
      console.log(chalk.red(err))
      res.status(500).json({ message: "Something went wrong" })
    })
})

router.post("/", (req, res) => {
  res.status(501).send("Create a User")
})

router.put("/:id", (req, res) => {
  res.status(501).send("Update a User")
})

router.delete("/:id", (req, res) => {
  res.status(501).send("Delete a User")
})

module.exports = router
