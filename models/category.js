var mongoose = require("mongoose");

var category = new mongoose.Schema({
    
    active: Boolean,
    
    name: String,
    desc: String
    
});



var Category = mongoose.model('Category', category);

module.exports = Category;