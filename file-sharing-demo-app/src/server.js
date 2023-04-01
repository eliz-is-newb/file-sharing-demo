const express = require('express');
const app = express();
const mssql = require("mysql");
 
app.get('/', function (req, res) {
 
    // Config your database credential
    const config = {
        user: 'SA',
        password: 'Your_Password',
        server: 'localhost',
        database: 'TransferFiles'
    };
 
    mssql.connect(config, function (err) {
        var request = new mssql.Request();
 
        request.query('select * from Files',
            function (err, records) {

                if (err){
                    console.log(err)
                } 
 
                // Send records as a response
                // to browser
                res.send(records);
 
            });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});
