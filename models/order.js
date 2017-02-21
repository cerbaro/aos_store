var mongoose = require("mongoose");


var order = new mongoose.Schema({
    
    date: Date,
    
    products: [{
        
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Coupon'  
        },
        
        paid: Number
        
    }],
    
    subtotal: Number,
    
    coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon'
    },
    
    total: Number,
    
    paymentType: {
        type: String,
        enum: ["Cash", "Debit", "Credit"]
    }
    
    
});


var Order = mongoose.model('Order', order);

module.exports = Order;