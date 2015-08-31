var Faker = require('Faker');
var fs = require('fs');

// Did this 5 times while changing the 'i' because of my computer's limitations

fs.open('users.json', 'a', function(error, fd) {
	for (i=8000001;i<=9000000;i++) {
		var first_name = Faker.name.firstName();
		var last_name = Faker.name.lastName();
		var user = {
			'id': i,
			'full_name': first_name + " " + last_name,
			'email': first_name + last_name + "@email.com",
			'password': 'password',
			'city': Faker.address.city()
		}
		fs.write(fd, JSON.stringify(user) + "\n", function (err) {
		  if (err) throw err;
		});
		console.log(i);
	}
	fs.close(fd, function() {
		console.log('file closed');
	});
});

fs.open('users.json', 'a', function(error, fd) {
	for (i=9000001;i<=10000000;i++) {
		var first_name = Faker.name.firstName();
		var last_name = Faker.name.lastName();
		var user = {
			'id': i,
			'full_name': first_name + " " + last_name,
			'email': first_name + last_name + "@email.com",
			'password': 'password',
			'city': Faker.address.city()
		}
		fs.write(fd, JSON.stringify(user) + "\n", function (err) {
		  if (err) throw err;
		});
		console.log(i);
	}
	fs.close(fd, function() {
		console.log('file closed');
	});
});

// db.users.find({$text: { $search: "\"john\"" }})