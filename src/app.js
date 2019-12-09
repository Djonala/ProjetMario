const express = require('express') // On utilise express
const formRouter = require('./router') // on inclut la page router.js 

const app = express() 

app.use(express.json()) // on utilise l'outil Json d'express
app.use(express.static('public')) // demande de lire les fichiers dans public par défaut, ouvre index.html

app.get('/ping', function(request, response) {
  response.send('pong')
})

// routes ici
app.use('/pageChoixJeu', formRouter.router) // sur l'url /pageChoixJeu on utilise le router de formaRouter (soit la de la page router.js)


app.listen(8080, function() { // On demande l'écoute sur le port 8080
  console.log('Serveur démarré sur le port 8080')
})
