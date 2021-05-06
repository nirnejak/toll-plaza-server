require("dotenv").config()

const chalk = require("chalk")
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

const { logger } = require("./middlewares/logger")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger)

app.use("/api/tolls", require("./routes/api/tolls"))

app.get("*", (req, res) => {
  res.status(404).json({ error: true, message: "Not Found" })
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(chalk.green("🔥  MongoDB Connected...")))
  .catch((err) => console.log(chalk.red(err)))

app.listen(process.env.PORT, () => {
  console.log(chalk.green(`👍  Server started at PORT: ${process.env.PORT}`))
})

module.exports = app
