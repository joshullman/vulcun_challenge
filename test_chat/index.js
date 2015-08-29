var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// NEED TO REPLACE THIS...HOW??
// CONTROLLER FOR EXPRESS THAT LOOKS LIKE SINATRA
app.get('/', function(req, res){
  res.sendFile(__dirname + '/login.html');
});

app.post('/', function(req, res){
  res.sendFile(__dirname + '/register.html');
});

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});



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