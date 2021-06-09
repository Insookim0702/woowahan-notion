'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    email: {
        typeof: String,
        required: true,
        unique: true,
        maxlength: 200
    },
    username: {
        typeof: String,
        required: true,
        unique: false,
        trim: true,
        maxlength: 150
    },
    password: {
        typeof: String,
        required: true,
        unique: false,
        trim: true,
        maxlength: 300
    },
    insertedDate: {
        type: Date,
        default: Date.now
    }
}); // const mongoose = require('mongoose');