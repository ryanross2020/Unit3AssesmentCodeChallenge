const {Schema, model} = require('mongoose');

const assesmentSchema = Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

module.exports = model('User', userSchema);