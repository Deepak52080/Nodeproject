var express = require('express');
var app = express();

app.listen(7000);

//Adding middle ware which is provided by express itself
app.use(express.json());

//Middle ware to serve my static file content webapp which has my fiori app

app.use("/", express.static("webapp/"));

app.listen(process.env.PORT || 8080);

this.aVendors = [{
    "id"   : "1",
    "firstName": "Brandon",
    "lastName": "Georgy",
    "companyName": "SAP Labs",
    "website": "sap.com",
    "emailId": "brandon.sap@sap.com",
    "gstNumber": "14885598845"
},
{
    "id"   : "2",
    "firstName": "Lumra",
    "lastName": "Kane",
    "companyName": "Deloitee",
    "website": "Deloitee.com",
    "emailId": "Kane@deloitee.com",
    "gstNumber": "87987984654"
},
{
    "id"   : "3",
    "firstName": "Beryl",
    "lastName": "Gellimore",
    "companyName": "IBM",
    "website": "ibm.com",
    "emailId": "beryl.galli@ibm.com",
    "gstNumber": "8989445445"
},
{
    "id"   : "4",
    "firstName": "Christian",
    "lastName": "Sandra",
    "companyName": "Pepsico",
    "website": "pesico.com",
    "emailId": "chris@pepsico.com",
    "gstNumber": "7878789985"
}];

app.get("/vendors", (req,res) => {
    res.json(this.aVendors);
});

app.post("/vendors",(req, res) => {
    var postRequestData = req.body;
    var uuid4 = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      };
    postRequestData.id = uuid4();
    res.json(postRequestData);
});

console.log("Your Microservice is running @ http://localhost:7000");