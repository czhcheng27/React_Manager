const md5 = require('blueimp-md5');
var express = require('express');
const { UserModel } = require('../db/model');
const filter = {password:0, __v:0}
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//login
router.post('/login', function (req, res) {
  const { username, password } = req.body
  console.log('login', username, password);
  UserModel.findOne({ username, password: md5(password) }, filter)
    .then(user => {
      if (user) {
        res.send({ code: 0, data: user })
      } else {
        res.send({ code: 1, msg: 'username and password doesn\'t match' })
      }
    })
    .catch(err => {
      console.log('err', err);
      res.send({code: 1, msg: 'Login failed, please try again'})
    })
})

module.exports = router;
