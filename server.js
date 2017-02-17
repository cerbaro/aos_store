var restify     = require('restify'),
    passport    = require('passport'),
    mongoose    = require('mongoose');


var app = restify.createServer({
    name: "AOS Store",
    formatters: {
        'application/json': function(req, res, body, callback) {
            return callback(null, JSON.stringify(body, null, space=2));
        }
    }
});

require('./routes.js')(app);


app.listen(8000);

console.log(" ");
console.log(app.name, "listening on port", 8000);
console.log(" ");
