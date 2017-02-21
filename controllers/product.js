var mongoose = require("mongoose"),
     Product = require('../models/product');


module.exports = {
    
	list: function(req, res, next) {
    	
    	Product.find().lean().exec(function(err, products){
            
            if(err){
                res.send("error");
            }else{
                res.send(products);
            }
            
            next();
            
        });    	
    	
    },
        
    info: function(req, res, next){
       
       Product.findOne({_id: req.params.id }).populate("category buyers.customer").lean().exec(function(err, product){
            
            if(err){
                res.send("error");
            }else{
                res.send(product);
            }
            
            next();
        }); 
        
    },
    
    create: function(req, res, next){
        
        var product = new Product(req.body);

        product.save(function (err) {
            
            if(err){
                res.send("error");
            }else{
                res.send("Product created.")
            }
            
            next();
        });

    },
    
    addBuyer: function(req, res, next){
        
        Product.update({_id: req.params.id }, { $push: { buyers: req.params.buyer } }, function (err) {

            if(err){
                res.send("error");
            }else{
                res.send("A new buyer was registered and the product was updated.")
            }
            
            next();
        });

    },
    
    remove: function(req, res, next){
        
        Product.remove({_id: req.params.id }, function (err) {

            if(err){
                res.send("error");
            }else{
                res.send("Product was deleted.")
            }
            
            next();
        });

    }
        	
};