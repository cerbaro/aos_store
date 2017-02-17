var mongoose = require("mongoose");


var product = new mongoose.Schema({
    
    active: Boolean,
    
    name: String,
    desc: String,
    
    price: Number,
    
    inStock: Number,
    
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    
    buyers: [{
        
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        
        quantity: Number
        
    }]
    
    
});


exports.Product = mongoose.model('Product', product);