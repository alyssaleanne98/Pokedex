// Dependencies 
const express = require('express');
const app = express()
// const methodOverride = require('method-override');
// const methodOverride = require('method-override');

// Config
const port = 3000


// Middleware
app.use(express.urlencoded(({extended:false})))
// app.use(methodOverride('_method'));
app.use(express.static('public'));



// Database
const pokemon = require('./models/pokemon.js');

// I N D U C E

// INDEX
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
// res.render('index.ejs', { 
//     allPokemon: pokemon });
});


// // SHOW
// app.get('/:id', (req, res) => {
// res.render('show.ejs', { data: Pokemon[req.params.id] });
// });

// Listener 
app.listen(port, () => {
	console.log(`listening to pokedex on port ${port}`)
})

