var mongoose = require("mongoose"),
        User = require('../models/user');


module.exports = {
    
	list: function(req, res, next) {
    	
    	User.find().lean().exec(function(err, users){
            
            if(err){
                res.send("error");
            }else{
                res.send(users);
            }
            
            next();
            
        });    	
    	
    },
    
    create: function(req, res, next){
        
        var user = new User(req.body);

        user.save(function (err) {
            
            if(err){
                res.send("error");
            }else{
                res.send("User created.")
            }
            
            next();
        });

    },
        	
};