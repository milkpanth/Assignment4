var express = require('express');
var router = express.Router();
const monk = require('monk')

const url = 'localhost:27017/AssignDB';

router.get('/', function(req, res, next){
    //res.send('Display all product');
    res.render("register");
    var ct=db.get('member');
    ct.insert({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,   
    })
});

// router.get('/add', function(req, res, next){
//     res.send('Add Product');
// });

// router.get('/edit', function(req, res, next){
//     res.send('edit Product');
// });

// router.get('/delete', function(req, res, next){
//     res.send('Delete Product');
// });

module.exports = router;