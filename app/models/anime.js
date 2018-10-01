const mongoose = require('mongoose');

module.exports = mongoose.model('Anime', {
    title : {type : String, default: ''},
    author: {type: String, default: ''},
    score: {type: Number, default: 0}
});