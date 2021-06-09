'use strict';

var express = require('express');
var userModel = require('../model/userModel');

var router = express.Router();

router.post('/signup', function (req, res) {
    var _req$body = req.body,
        username = _req$body.username,
        password = _req$body.password,
        nickname = _req$body.nickname;

    var newUser = new UserModel({
        username: username,
        password: password,
        nickname: nickname
    });
    newUser.save(function (error, saved) {
        if (error) {
            console.log(error);
        } else {
            console.log('saved');
            res.send(saved);
        }
    });
});

// export default router;