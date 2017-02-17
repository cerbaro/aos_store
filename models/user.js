var mongoose = require("mongoose");


var user = new mongoose.Schema({
    
    active: Boolean,
    admin: Boolean,
    
    name: String,
    
    email: String,
    passwd: String,
        
    socialID: {
        code: String,
        type: { 
            type: String, 
            enum: ["ssn", "ein", "cpf", "cnpj"] 
        }
    },

    phone: Number,
    addr: String,
    addr2: String,
    number: Number,
    
    city: String,
    state: String,
    zipcode: Number
    
    
});


exports.User = mongoose.model('User', user);