var restify  = require('restify'),
    passport = require('passport'),
    mongoose = require('mongoose');
    
    
    
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/aos_store')


var app = restify.createServer({
    name: "AOS Store"
});

app.use(restify.CORS());
app.use(restify.fullResponse());
app.use(restify.bodyParser());

require('./routes.js')(app);

app.listen(8000);

console.log(" ");
console.log(app.name, "listening on port", 8000);
console.log(" ");
