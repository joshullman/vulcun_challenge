var databaseUrl = "mydb"; // "username:password@example.com/mydb"
var databaseUrl = 'localhost:27017/vulcun_challenge'
var collections = ["users"]
var mongojs = require("mongojs");
var db = mongojs(databaseUrl, collections);
var Faker = require('Faker');

Date.prototype.timeNow = function () {
  return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

var start = new Date().timeNow();

db1 = mongojs(databaseUrl + "115", collections)



// db2 = mongojs(databaseUrl + "2", collections)
// db3 = mongojs(databaseUrl + "3", collections)
// db4 = mongojs(databaseUrl + "4", collections)
// db5 = mongojs(databaseUrl + "5", collections)
// db6 = mongojs(databaseUrl + "6", collections)
// db7 = mongojs(databaseUrl + "7", collections)
// db8 = mongojs(databaseUrl + "8", collections)
// db9 = mongojs(databaseUrl + "9", collections)
// db10 = mongojs(databaseUrl + "10", collections)

// db.users.save({name: "john", email: "srirangan@gmail.com", password: "iLoveMongo", sex: "female"}, function(err, saved) {
//   if( err || !saved ) console.log("User not saved");
//   else console.log("User saved");
// });

// db.users.save({name: "JOHN", email: "srirangan@gmail.com", password: "iLoveMongo", sex: "female"}, function(err, saved) {
//   if( err || !saved ) console.log("User not saved");
//   else console.log("User saved");
// });

// db.users.save({name: "John", email: "srirangan@gmail.com", password: "iLoveMongo", sex: "female"}, function(err, saved) {
//   if( err || !saved ) console.log("User not saved");
//   else console.log("User saved");
// });

// db.users.save({name: "johnny", email: "srirangan@gmail.com", password: "iLoveMongo", sex: "female"}, function(err, saved) {
//   if( err || !saved ) console.log("User not saved");
//   else console.log("User saved");
// });


insertPeeps1 = function(db) {

	for (i=1;i<=100000;i++) {
		var first_name = Faker.name.firstName().toUpperCase();
		var last_name = Faker.name.lastName().toUpperCase();
		var user = {
			'id': i.toString(),
			'full_name': first_name + " " + last_name,
			'email': first_name + last_name + "@email.com",
			'city': Faker.address.city()
		}
		console.log(i)
		db.users.save(user, function(err, saved) {
		  if( err || !saved ) console.log("User not saved");
		});
	}
}

findJohns = function(db) {
	db.users.find({full_name: {$regex: /^JOHN/ } }, function(err, users) {
	  if( err || !users) console.log("No Johns in the database");
	  else users.forEach( function(john) {
	    console.log(john);
	  } );
	});
}


insertPeeps1(db1);
db1.users.createIndex( { "full_name" : 1 } )
findJohns(db1);

var end = new Date().timeNow();
console.log(start)
console.log(end)
// function insertPeeps2(db)  {
// 	for (i=1000001;i<=2000000;i++) {
// 		var user = {
// 			'id': i.toString(),
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		console.log(i)
// 		db.users.save(user, function(err, saved) {
// 		  if( err || !saved ) console.log("User not saved");
// 		  else console.log(i);
// 		});
// 	}
// }

// function insertPeeps3(db)  {
// 	for (i=2000001;i<=3000000;i++) {
// 		var user = {
// 			'id': i.toString(),
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		console.log(i)
// 		db.users.save(user, function(err, saved) {
// 		  if( err || !saved ) console.log("User not saved");
// 		  else console.log(i);
// 		});
// 	}
// }

// function insertPeeps4(db)  {
// 	for (i=3000001;i<=4000000;i++) {
// 		var user = {
// 			'id': i.toString(),
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		console.log(i)
// 		db.users.save(user, function(err, saved) {
// 		  if( err || !saved ) console.log("User not saved");
// 		  else console.log(i);
// 		});
// 	}
// }

// function insertPeeps5(db) { 
// 	for (i=4000001;i<=5000000;i++) {
// 		var user = {
// 			'id': i.toString(),
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		console.log(i)
// 		db.users.save(user, function(err, saved) {
// 		  if( err || !saved ) console.log("User not saved");
// 		  else console.log(i);
// 		});
// 	}
// }

// function insertPeeps6(db) { 
// 	for (i=5000001;i<=6000000;i++) {
// 		var user = {
// 			'id': i.toString(),
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		console.log(i)
// 		db.users.save(user, function(err, saved) {
// 		  if( err || !saved ) console.log("User not saved");
// 		  else console.log(i);
// 		});
// 	}
// }

// function insertPeeps7(db) { 
// 	for (i=6000001;i<=7000000;i++) {
// 		var user = {
// 			'id': i.toString(),
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		console.log(i)
// 		db.users.save(user, function(err, saved) {
// 		  if( err || !saved ) console.log("User not saved");
// 		  else console.log(i);
// 		});
// 	}
// }

// function insertPeeps8(db) { 
// 	for (i=7000001;i<=8000000;i++) {
// 		var user = {
// 			'id': i.toString(),
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		console.log(i)
// 		db.users.save(user, function(err, saved) {
// 		  if( err || !saved ) console.log("User not saved");
// 		  else console.log(i);
// 		});
// 	}
// }

// function insertPeeps9(db) { 
// 	for (i=8000001;i<=9000000;i++) {
// 		var user = {
// 			'id': i.toString(),
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		console.log(i)
// 		db.users.save(user, function(err, saved) {
// 		  if( err || !saved ) console.log("User not saved");
// 		  else console.log(i);
// 		});
// 	}
// }

// function insertPeeps10(db) { 
// 	for (i=9000001;i<=10000000;i++) {
// 		var user = {
// 			'id': i.toString(),
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		console.log(i)
// 		db.users.save(user, function(err, saved) {
// 		  if( err || !saved ) console.log("User not saved");
// 		  else console.log(i);
// 		});
// 	}

// }


// insertPeeps2(db2);
// insertPeeps3(db3);
// insertPeeps4(db4);
// insertPeeps5(db5);
// insertPeeps6(db6);
// insertPeeps7(db7);
// insertPeeps8(db8);
// insertPeeps9(db9);
// insertPeeps10(db10);
// databases = [
// db1
// db2,
// db3,
// db4,
// db5,
// db6,
// db7,
// db8,
// db9,
// db10
// ]
// findJohns(databases);






// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// // Connection URL
// var url = 'mongodb://localhost:27017/vulcun_challenge';
// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   // db.people.insert(
//   // 			{
// 		// 	"_id" : 1,
// 		// 	"full_name" : "Josh Ullman",
// 		// 	"email" : "joshullman@gmail.com",
// 		// 	"city" : "San Francisco"
// 		// }
//   // 	)

//   insertDocuments(db, function() {
//   	// console.log(db.people.find())
//     db.close();
//   });
// });

// var insertDocuments = function(db, callback) {
//   // Get the documents collection
//   var people = db.collection('people');
//   // Insert some documents
//   people.insert([
//     		{
// 			"_id" : 14,
// 			"full_name" : "Josh Ullman",
// 			"email" : "joshullman@gmail.com",
// 			"city" : "San Francisco"
// 		}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the document collection");
//     console.log(db.people;
//     callback(result);
//   });

// 	// var people = db.collection("people")

// 	// people.insert(
// 		// {
// 		// 	"_id" : 1,
// 		// 	"full_name" : "Josh Ullman",
// 		// 	"email" : "joshullman@gmail.com",
// 		// 	"city" : "San Francisco"
// 		// }
// 	// )
// 	// var results = people.find({"full_name" : "Josh Ullman"})
// 	// console.log(results)
// }

// var redis = require('redis');
// var client = redis.createClient();
// var Faker = require('Faker');

// client.on('connect', function() {
//     console.log('connected');
// });

// var k = 0
// while (k < 100) {
// 	for (i=1;i<=100000;i++) {
// 		id = (k * 100000 + i).toString()
// 		var user = {
// 			'id': id,
// 			'full_name': Faker.name.findName(),
// 			'email': Faker.internet.email(),
// 			'city': Faker.address.city()
// 		}
// 		client.hmset('users', user);
// 		console.log(user.id)
// 	}
// k++;
// }

// for (i=1;i<=10;i++) {
// 	var first_name = Faker.name.firstName()
// 	var last_name = Faker.name.lastName()
// 	var full_name =  first_name + " " + last_name
// 	var user = {
// 		'full_name': full_name,
// 		'email': first_name + last_name + "@aol.com",
// 		'city': Faker.address.city()
// 	}

// 	client.sadd('users', user);
// 	console.log(user.id)
// }

// client.smembers('users', function (err, obj) {
//    console.dir(obj);
// });