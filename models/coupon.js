var mongoose = require("mongoose");


var coupon = new mongoose.Schema({
    
    active: Boolean,
    
    code: String,
    desc: String,
    
    begin: Date,
    end: Date,
    
    amount: Number,
    percent: Number
    
});


exports.Coupon = mongoose.model('Coupon', coupon);