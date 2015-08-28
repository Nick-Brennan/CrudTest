$(function(){
	getStuff();
});



function getStuff(){
	console.log("called getStuff in app.js");
	$.get("/stuff", function(req, res){
		console.log(req);
		var stuff = req;
		console.log(stuff);
		var stuffTemplate = _.template($('#stuff_template').html());
		stuff.forEach(function(thing){
			$('#object_placeholder').append(stuffTemplate(thing));
		});
	});
};

function deleteThing(context){
	console.log($(context).data()._id);
	$.ajax({
		url: "/stuff/" + $(context).data()._id,
		type: "DELETE",
		success: function(){
			window.location.reload();
		}
	})
};

