
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguagesSchema = new Schema({
    english: String,
    hindi: String,
    urdu: String,
    bengali: String,
    punjabi: String,
    marathi: String,
    gujarati: String,
    nepali: String
});

module.exports = mongoose.model('Languages', LanguagesSchema);