var mongoose = require("mongoose"),
    Category = require('../models/category');


module.exports = {
    
	list: function(req, res, next) {
    	
    	Category.find().lean().exec(function(err, categories){
            
            if(err){
                res.send("error");
            }else{
                res.send(categories);
            }
            
            next();
            
        });    	
    	
    },
        
    info: function(req, res, next){
       
       Category.findOne({_id: req.params.id }).lean().exec(function(err, category){
            
            if(err){
                res.send("error");
            }else{
                res.send(category);
            }
            
            next();
        }); 
        
    },
    
    create: function(req, res, next){
        
        var category = new Category(req.body);
        
        console.log(req.body)
        
        category.save(function (err) {
            
            if(err){
                res.send("error");
            }else{
                res.send("Category created.")
            }
            
            next();
        });

    },
    
    update: function(req, res, next){
        
        Category.update({_id: req.params.id }, req.params.category, function (err) {

            if(err){
                res.send("error");
            }else{
                res.send("Category was updated.")
            }
            
            next();
        });

    },
    
    remove: function(req, res, next){
        
        Category.remove({_id: req.params.id }, function (err) {

            if(err){
                res.send("error");
            }else{
                res.send("Category was deleted.")
            }
            
            next();
        });

    }
        	
};