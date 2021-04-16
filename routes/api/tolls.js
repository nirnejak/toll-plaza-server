// const chalk = require("chalk")
const express = require("express")

const isAuthenticated = require("../../middlewares/auth")
// const Toll = require("../../models/toll")

const router = express.Router()

router.get("/", isAuthenticated, (req, res) => {
  res.status(501).send("List Tolls")
})

router.get("/:id", isAuthenticated, (req, res) => {
  res.status(501).send("Get a Toll")
})

router.post("/", isAuthenticated, (req, res) => {
  res.status(501).send("Create a User")
})

router.put("/:id", isAuthenticated, (req, res) => {
  res.status(501).send("Update a User")
})

router.delete("/:id", isAuthenticated, (req, res) => {
  res.status(501).send("Delete a User")
})

module.exports = router
