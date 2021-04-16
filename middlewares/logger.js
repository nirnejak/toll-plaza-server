const chalk = require("chalk")
const { format } = require("date-fns")

exports.logger = (req, res, next) => {
  console.log(
    `${chalk.white.bold.inverse(` ${req.method} `)} ${req.protocol}://${req.get(
      "host"
    )}${req.originalUrl} : ${format(new Date())}`
  )
  next()
}
