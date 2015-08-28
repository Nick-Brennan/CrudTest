var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var views = path.join(process.cwd(), "views/");
var db = require('./models');

app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res){
	console.log("get Home fired");
	res.sendFile(views + 'index.html')
});

app.get('/stuff', function(req, res){
	console.log("get Stuff fired");
	db.Thing.find({}, function(err, stuff){
		if(err){
			console.log(err);
		}
		res.send(stuff);
	});
});

app.post('/stuff', function(req, res){
	var newThing = {};
	newThing.name = req.body.name.name;
	newThing.size = req.body.size.size;
	db.Thing.create(newThing, function(err, result){
		if(err){
			console.log(err);
		}
		res.redirect('/');
	});
});

app.delete("/stuff/:id", function(req, res){
	var targetToDelete = req.params.id;
	console.log(targetToDelete);
	db.Thing.remove({_id: targetToDelete}, function(err, result){
		if(err){
			console.log(err);
		}
		res.send(result);
	});
});


app.listen(3002, function(){
	console.log('listening on port 3002');
})