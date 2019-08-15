var path = require('path')
var fs = require('fs')

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {

    if (err) 
      return done(err);

    var pending = list.length;

    if (!pending) 
      return done(null, results);

    list.forEach(function(file) {

      file = path.resolve(dir, file);

      fs.stat(file, function(err, stat) {

        if (stat && stat.isDirectory()) {

          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) 
              done(null, results);
          });

        } else {
            results.push(file);
            if (!--pending) 
              done(null, results);
        }
      });
    });
  });
};
var sam;
walk('./', function(err, results) {
  if (err) throw err;
  sam = results;
});


module.exports = (app) => {

  app.use('/',function(req,res){
    res.json(sam);
  });
  
};
