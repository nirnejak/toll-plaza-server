require("dotenv").config()

const chalk = require("chalk")
const cors = require("cors")
const express = require("express")

const { logger } = require("./middlewares/logger")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger)

// app.use("/api/users", require("./routes/api/users"))

app.get("*", (req, res) => {
  res.status(404).json({ error: true, message: "Not Found" })
})

app.listen(process.env.PORT, () => {
  console.log(chalk.green(`👍  Server started at PORT: ${process.env.PORT}`))
})

module.exports = app
