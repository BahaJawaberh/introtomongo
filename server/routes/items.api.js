 const express = require('express')
const router = express.Router

const items =[]


router.get('/getItems', (req, res) => res.send(items))

router.post('/addNewItem', function (req, res){
    const item = req.body
    items.push(item)

})
module.exports= router