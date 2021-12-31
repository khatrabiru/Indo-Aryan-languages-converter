
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguagesSchema = new Schema({
    english: String,
    hindi: String
});

module.exports = mongoose.model('Languages', LanguagesSchema);