var category = require("./controllers/category"),
      coupon = require("./controllers/coupon"),
       order = require("./controllers/order"),
     product = require("./controllers/product"),
        user = require("./controllers/user");

     
module.exports = function(app) {
  
    
    /*
     *
     * Categories
     *
     */
    
    app.get('/api/categories', category.list);
    app.get('/api/category/:id', category.info);
            
    app.post('/api/category', category.create);        
    app.put('/api/category', category.update);
    
    app.del('/api/category', category.remove);
    
    
    /*
     *
     * Products
     *
     */
    
    app.get('/api/products', product.list);
    app.get('/api/product/:id', product.info);
            
    app.post('/api/product', product.create);        
    app.put('/api/product', product.addBuyer);
    
    app.del('/api/product', product.remove);   
    
    
    /*
     *
     * Users
     *
     */
    
    app.get('/api/users', user.list);
            
    app.post('/api/user', user.create);        
    
              
  
};
