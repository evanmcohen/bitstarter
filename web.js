var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
<<<<<<< HEAD
    var fs = require('fs');
    var buf = new Buffer(fs.readFileSync('index.html'), 'utf-8');
    response.send(buf.toString());
=======
    response.send(fs.readFileSync(~/index.html).toString());
>>>>>>> parent of da5078d... updated web.js again
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
