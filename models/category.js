var mongoose = require("mongoose");


var category = new mongoose.Schema({
    
    active: Boolean,
    
    name: String,
    desc: String
    
});


exports.Category = mongoose.model('Category', category);