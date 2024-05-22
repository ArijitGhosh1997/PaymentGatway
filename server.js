const express = require('express')
const app = express()
require('dotenv').config();
const path = require('path');

//import bodyparser
const bodyParser = require("body-parser");
// parse application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


// Mention View Engine
app.set('view engine', 'ejs');
// Set View Folder
app.set('views','views');
//Mention this views folder as static
app.use(express.static(path.join(__dirname,'/views')));

//import Route
const paymentRoute = require('./routes/paymentRoute');
app.use('/',paymentRoute);

// http Connection
const portNo = 3000;
app.listen(portNo, () => {
    console.log(`Server running at port ${portNo}`);
});