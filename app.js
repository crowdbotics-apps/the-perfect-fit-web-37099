var express = require('express');
var http = require('http');
var path = require('path');
var reload = require('reload');
var bodyParser = require('body-parser');
var logger = require('morgan');
var watch = require('watch');
var PrettyError = require('pretty-error');
var app = express();
var config = require('./server/config/config.js');

// Initialize pretty-error
var pe = new PrettyError();
pe.start();

// Set port for heroku deployment
app.set('port', config.port);
app.use(logger('dev'));

// Support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Service static assets
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) =>  res.sendFile(path.join(__dirname, "client", "build", 'index.html')));

// Index Routes
require('./routes/index.js')(app);

var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log(
    'App is listening on port ' +
      config.port +
      '! Visit localhost:' +
      config.port +
      ' in your browser.'
  );
});

// Reload code here
var reloadServer = reload(server, app);

watch.watchTree(__dirname + '/client', function (f, curr, prev) {
  // Fire server-side reload event
  reloadServer.reload();
});
