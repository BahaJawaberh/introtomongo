const express = require('express')
const app = express()
exports.app = app




const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))