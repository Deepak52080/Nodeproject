var express = require('express');
var app = express();


app.listen(7000);

//implement first micoservice at the end point blank
app.get("/", (req, res) => {
    res.send("Hello World");

});

app.get("/vendors", (req, res) => {
    res.send({
        "empInformation": [
            {
                "empId": 100,
                "empName": "Marcos",
                "salary": 9000,
                "currency": "USD"
            },
            {
                "empId": 200,
                "empName": "Danile",
                "salary": 2000,
                "currency": "USD"
            },
            {
                "empId": 300,
                "empName": "Mariana",
                "salary": 3000,
                "currency": "USD"
            }
    ],
        "cities": [
            {   
                "cityName": "neYork",
                "state": "Demo"
            },
            {   
                "cityName": "new jersy",
                "state": "test"
            }
    ]
    
    });

});

console.log("your first microservice is running @ http://localhost:7000");