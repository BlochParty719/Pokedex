const express = require('express')
methodOverride = require('method-override')
app = express()

const Pokemon = require('../pokedex/models/pokemon.js')

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

// Data
app.get('/pokedata', (req, res) => {
  res.send(pokemon)
})

// Index
app.get('/', (req, res) => {
  res.render('index.ejs')
})

// Pokedex
app.get('/pokemon', (req, res) => {
  res.render('pokedex.ejs', {
    data: pokemon
  })
})

// New
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs')
})

// Show
app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {
    data: Pokemon[req.params.index],
    index: req.params.index
  })
})

// Edit
app.get('/pokemon/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    data: pokemon[req.params.index],
    index: req.params.index
  })
})

// Post
app.post('/pokemon', (req, res) => {
  let newPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(','),
    stats: {
      hp: req.body.attack,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    }
  }
})

// Put
app.put('/pokemon/:index', (req, res) => {
  let editPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(','),
    stats: {
      hp: req.body.attack,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    }
  }
})

// Delete
app.delete('/pokemon/:id', (req, res) => {
  pokemon.splice(req.params.index, 1)
  res.redirect('/pokemon')
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
