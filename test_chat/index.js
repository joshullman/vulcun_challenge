var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var mongoClient = require('mongodb').mongoClient;
var mongoUrl = 'mongodb://localhost:27017/vulcun_challenge';
var _db;

var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(morgan('dev'));

app.use(bodyParser.json());

// MongoClient.connect(mongoUrl, function(err, db) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('connected to mongo');
//     _db = db;
//     app.listen(port, function() {
//       console.log('listening for requests on localhost:%s,', port);
//     });
//   }
// });

var login = require('./routes/login');
var register = require('./routes/register');
var chat = require('./routes/chat');

app.set('port', port)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', login);
app.use('/register', register);
app.use('/chat', chat);


// SOCKET IO
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	console.log(msg)
  	//
  	// in here is where we send off the message to something somewhere
  	//
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});