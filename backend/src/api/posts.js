const express = require('express');
const userModel = require('../model/userModel');

const router = express.Router();

router.post('/signup', (req, res) => {
    const { username, password, nickname } = req.body;
    const newUser = new UserModel({
        username,
        password,
        nickname,
    });
    newUser.save((error, saved) => {
        if (error) {
            console.log(error);
        } else {
            console.log('saved');
            res.send(saved);
        }
    });
});

// export default router;
