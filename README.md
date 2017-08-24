# Contact-List-App
<img src="contactlistapp.JPG" alt="mean stack app">
##MEAN Stack RESTful API
###This repo contains the code for a RESTful API Contact List App that was built using the MEAN stack:

*MongoDB
*NodeJS
*Express
*AngularJS

Install Mongodb and run it using command prompt by going to the /bin and running:<br />
mongod<br />
After mongodb is running, open another cmd window and use the following commands to create and db,<br />
MongoDB Enterprise > show dbs <br />
admin  0.000GB<br />
local  0.000GB<br />
MongoDB Enterprise > use contactlist<br />
switched to db contactlist<br />
MongoDB Enterprise > db.contactlist.insert({name:"Tom",email:"tom@testemail.com", number:"(444) 444-4444"})<br />
WriteResult({ "nInserted" : 1 })<br />
MongoDB Enterprise > db.contactlist.find()<br />
{ "_id" : ObjectId("599de11b47aded362050760e"), "name" : "Tom", "email" : "tom@testemail.com", "number" : "(444) 444-4444" }<br />
MongoDB Enterprise > db.contactlist.find().pretty()<br />
{<br />
        "_id" : ObjectId("599de11b47aded362050760e"),<br />
        "name" : "Tom",<br />
        "email" : "tom@testemail.com",<br />
        "number" : "(444) 444-4444"<br />
}<br />
MongoDB Enterprise > db.contactlist.insert([{name:"Tracy", email:"tracy@testemail2.com", number:"(555) 555-5555"}, {name:"Tucker", <br />email:"tucker@testemail3.com", number: "(434) 433-5555"}])<br />
BulkWriteResult({<br />
        "writeErrors" : [ ],<br />
        "writeConcernErrors" : [ ],<br />
        "nInserted" : 2,<br />
        "nUpserted" : 0,<br />
        "nMatched" : 0,<br />
        "nModified" : 0,<br />
        "nRemoved" : 0,<br />
        "upserted" : [ ]<br />
})<br />
MongoDB Enterprise > db.contactlist.find().pretty()<br />
{<br />
        "_id" : ObjectId("599de11b47aded362050760e"),<br />
        "name" : "Tom",<br />
        "email" : "tom@testemail.com",<br />
        "number" : "(444) 444-4444"<br />
}<br />
{<br />
        "_id" : ObjectId("599de1f147aded362050760f"),<br />
        "name" : "Tracy",<br />
        "email" : "tracy@testemail2.com",<br />
        "number" : "(555) 555-5555"<br />
}
{
        "_id" : ObjectId("599de1f147aded3620507610"),<br />
        "name" : "Tucker",<br />
        "email" : "tucker@testemail3.com",<br />
        "number" : "(434) 433-5555"<br />
}<br />
MongoDB Enterprise ><br />


##Install the Node modules with

npm install

npm install express

npm install body-parser

## To run the application, open terminal
node server.js






