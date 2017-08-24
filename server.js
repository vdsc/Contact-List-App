var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var mongojs = require("mongojs");
var db = mongojs("contactlist", ["contactlist"]);
//above line: first line require mongojs module, second show which collection we will use

/* to check if server is runnigng fine . '/' routes to index page*/
// app.get('/', function(req,res){
//     res.send("hello response from server.js!");
// });
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
/*above, static means we are telling the server to look for static files like html, css, javascript and image files
which do not change dynamically as we use the app*/
//for this app we will put the files in a folder caled public


app.get('/contactlist', function(req,res){
    console.log("I received a GET");
    // //dummy data
    // person1 = {
    //     name: "tim",
    //     email:"tim@email1.com",
    //     number:"(111) 111-1111",
    // };
    //  person2 = {
    //     name: "emily",
    //     email:"emily@email2.com",
    //     number:"(222) 222-2222",
    // };
    //  person3 = {
    //     name: "harvey",
    //     email:"harvey@email1.com",
    //     number:"(333) 333-3333",
    // };
    // var contactList =[person1, person2, person3];
    // res.json(contactList);

    db.contactlist.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    });
});

app.post('/contactlist', function(req,res){
 console.log(req.body);
 db.contactlist.insert(req.body, function(err, docs){
     res.json(docs);
 });   
});

app.delete('/contactlist/:id', function(req,res){
    var id = req.params.id;
 console.log(id);
 db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, docs){
     res.json(docs);
 });   
});
    
app.get('/contactlist/:id', function(req,res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, docs){
     res.json(docs);
     console.log(docs);
 });   
});

app.put('/contactlist/:id', function(req,res){
    var id = req.params.id;
    // var newcontactname = req.body;
    // console.log(newcontactname);
    console.log(id);
    db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set:{name: req.body.name, email: req.body.email, number: req.body.number}},  new: true},
    function(err, docs){
     res.json(docs);
     console.log(docs);
 });   
});



app.listen(3000);
console.log("server running on port 3000");

