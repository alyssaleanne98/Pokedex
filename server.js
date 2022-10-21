// Dependencies 
const express = require('express');
const app = express();

// Config
const port = 3000
// Database
const Pokemon = require('../models/pokemon.js');


// // INDEX
// app.get('/', (req, res) => {
// res.render('index.ejs', { data: Pokemon });
// });


// // SHOW
// app.get('/:id', (req, res) => {
// res.render('show.ejs', { data: Pokemon[req.params.id] });
// });

// Listener 
app.listen(port, () => {
	console.log(`listening to gitpub on port ${port}`)
})

