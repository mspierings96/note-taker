const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

const express = require('express')
const app = express();
const port = 3000


app.use(express.static('public'))

bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes/htmlRoutes')(app)
console.log('weird directory thing', __dirname)

require('./routes/apiRoutes')(app)
console.log('api directory thing', __dirname)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

