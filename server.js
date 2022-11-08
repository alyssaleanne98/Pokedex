// Dependencies 
const express = require('express');
const app = express();
const methodOverride = require('method-override');

// Config
const port = 3000


// Middleware
app.use(express.urlencoded(({ extended: false })))
app.use(methodOverride('_method'));
// app.use(express.static('public'));



// Database
const pokemon = require('./models/pokemon.js');

// I N D U C E

// INDEX
app.get('/pokemon', (req, res) => {
    // res.send('hi there')
    res.render('index.ejs', {
        allPokemons: pokemon
    });
});

//NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
});

// Delete
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1); // this removes the item from the array 
    res.redirect('/pokemon'); // redirect back to index route 
});



//Update
app.put('/pokemon/:id', (req, res) =>{

    let newPokemon = {
        name: req.body.name,
        type: req.body.type,
        img: req.body.img,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spadefense: req.body, spadefense,
            speed: req.body, speed, 
        }
    }
    pokemon[req.params.id] = newPokemon
    res.redirect('/pokemon')
})


//CREATE 
app.post('/pokemon', (req, res) => {
    console.log(req.body)


    let newPokemon = {
        name: req.body.name,
        type: req.body.type,
        img: req.body.img,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spadefense: req.body, spadefense,
            speed: req.body, speed, 
        }
    }
    pokemon.push(newPokemon)
    res.redirect('/pokemon')
})


//EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        allPokemon: pokemon[req.params.id], 
        index: req.params.id,
    }) // pass in an object that contains    
});

// SHOW
app.get('/pokemon/:id', (req, res) => {
    console.log(req.params)
    console.log(pokemon[req.params.id])
    res.render('show.ejs', {
        allPokemon: pokemon[req.params.id],
        pokemonIndex: req.params.id,
    });
});


// Listener 
app.listen(port, () => {
    console.log(`listening to pokedex on port ${port}`)
})

