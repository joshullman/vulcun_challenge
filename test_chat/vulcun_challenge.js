var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
// var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var ejs = require('ejs');
// var mongoClient = require('mongodb').mongoClient;
// var mongoUrl = 'mongodb://localhost:27017/vulcun_challenge';
var redis = require('redis');
var redisClient = redis.createClient();
var port = process.env.PORT || 3000;
var _db;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('port', port)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var login = require('./routes/login');
var register = require('./routes/register');
var chat = require('./routes/chat');

app.use('/', login);
app.use('/register', register);
app.use('/chat', chat);

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

var storeMessage = function (name, data) {
  var message = JSON.stringify({user: email, data: data})
  redisClient.lpush('messages', message, function (err, response) {
    redisClient.ltrim('messages', 0, 9);
  });
}

// // SOCKET IO
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//   	console.log(msg)
//   	// put message into db
//   	// in here is where we send off the message to something somewhere
//   	//
//     io.emit('chat message', msg);
//   });
// });

io.sockets.on('connection', function (client) {
  client.on('join', function (name) {
    client.broadcast.emit('add chatter', name);
    redisClient.smembers('names', function (err, names) {
      names.forEach(function (name) {
        client.emit('add chatter', name);
      });
    });
    redisClient.sadd('chatters', name);

    redisClient.lrang('messages', 0, -1, function (err, messages) {
      messages = messages.reverse();

      messages.forEach(function (message) {
        message = JSON.parse(message)
        client.emit('messages', message.name + ": " + message.data)
      });
    });

    client.set('nickname', name)
    client.broadcast.emit('chat', name + " joined the chat");
  });

  client.on('disconnect', function (name) {
    client.get('nickname', function (err, name) {
      client.broadcast.emit('remove chatter', name);
      redisClient.srem('chatters', name)
    });
  });

  client.on('messages', function (message) {
    client.get('nickname', function (error, name) {
      client.broadcast.emit('messages', name + ": " + message);
      client.emit('messages', name + ": " + message);
      storeMessage(name, message)
    });
  });

  console.log('Client connected...');
  client.emit('messages', {hello: 'world'});
});

server.listen(port, function(){
  console.log('listening on: ' + port);
});