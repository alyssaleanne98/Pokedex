// Dependencies 
const express = require('express');
const app = express();
const methodOverride = require('method-override');

// Config
const port = 3000


// Middleware
app.use(express.urlencoded(({ extended: false })))
app.use(methodOverride('_method'));
app.use(express.static('public'));



// Database
const Pokemon = require('./models/pokemon.js');

// I N D U C E

// INDEX
app.get('/pokemon', (req, res) => {
    res.send(Pokemon)
    // res.render('index.ejs', { 
    //     allPokemon: Pokemon, 
    })
// })

//NEW
// app.get('pokemon/new', (req, res) => {
//     res.send("this is the new route")
// });


// // SHOW
//what is req.params.id? this is an object containing the parameter values parsed from the URL path. the "name" from the url path will be available when you use req.params.name.
app.get('/pokemon/:id', (req, res) => {
    console.log(req.params)
    console.log(Pokemon[req.params.id])
    res.render('show.ejs', {
        allPokemon: Pokemon[req.params.id],
    });
});



// //CREATE 
// app.post('/pokemon', (req, res) => {
//     res.send("this is the create route")
// });

// //EDIT
// app.get('/pokemon/:id/edit', (req, res) => {
//     res.send("this is the edit route")
// });


// Listener 
app.listen(port, () => {
    console.log(`listening to pokedex on port ${port}`)
})

