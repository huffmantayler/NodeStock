// Stock Market Portfolio App
const express = require('express');
const app = express();
const path = require('path');
const exphbs  = require('express-handlebars');

const PORT = process.env.PORT || 5000;

//Set handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
      stuff: "This is stuff..."
    });
});



// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server listening on port ' + PORT));
