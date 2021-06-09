'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 8080;

app.use(_express2.default.json());
app.use((0, _cors2.default)({ origin: 'http://localhost:3000' }));

app.listen(port, function () {
    console.log(_chalk2.default.black.bgHex('#41b883').bold(' express is running on ' + port + ' '));
});

_mongoose2.default.connect('mongodb+srv://admin:1234@cluster0.f2q6e.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }).then(function () {
    console.log(_chalk2.default.bold.bgCyan('mongoDB connection is success!'));
}).catch(function (err) {
    console.log(_chalk2.default.bold.bgRed(err));
});

// app.use('/posts', posts);

app.post('/saveCat', function (req, res) {
    console.log(req.body);
    var Cat = _mongoose2.default.model('Cat', { name: 'string' });
    var kitty = new Cat({ name: req.body.catName });
    var isSuccess = false;
    kitty.save().then(function () {
        isSuccess = true;
        console.log(_chalk2.default.bgGreen.bold('save success'));
    });
    if (isSuccess === true) {
        res.status(200).json({ isSuccess: true });
        return;
    }

    res.send(false);
});

app.post('/saveUser', async function (req, res) {
    console.log(_chalk2.default.bgBlack.bold(req.body));
    var user = _mongoose2.default.model('user', {
        name: 'string',
        token: 'string',
        email: 'string'
    });
    var kitty = new user({
        name: req.body.name,
        token: req.body.token,
        email: req.body.email
    });

    await kitty.save().then(function () {
        isSuccess = true;
        console.log(_chalk2.default.bgGreen.bold('save success'));
    });
    var isSuccess = false;
    if (isSuccess === true) {
        res.status(200).json({ isSuccess: true });
        return;
    }

    res.status(200).json({ isSuccess: false });
});

app.get('/', function (req, res) {
    res.send({ id: 1, name: 'stu1', age: 32 });
});

app.get('/login', function (req, res) {
    res.send('login');
});