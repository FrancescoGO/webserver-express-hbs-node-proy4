
const express = require('express');
const app = express(); 
const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers');

// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'francesco gomez'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

