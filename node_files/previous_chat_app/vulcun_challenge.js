var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var redis = require('redis');
var redisClient = redis.createClient();

var storeMessage = function (name, data) {
	var message = JSON.stringify({name: name, data: data})
	redisClient.lpush('messages', message, function (err, response) {
		redisClient.ltrim('messages', 0, 9);
	});
}

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

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

server.listen(8080);