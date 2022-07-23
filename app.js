const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('my-sql');
const chalk = require('chalk');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8085;

//Parsing Middleware
//Parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended:false}));

//Parse Applicaiton/JSON
app.use(bodyParser.json());

//To Upload Static type of Files
app.use(express.static('public'));

//Template Engine
app.engine('hbs',exphbs.engine({extname:'.hbs'}));
app.set('view engine','hbs');

// Router
app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(PORT , ()=>{console.log(chalk.bgRedBright(`Server Is Running On This ${PORT} Port Number...!`))})