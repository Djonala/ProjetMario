/** ----------------------------------------------------------------------------
 * Le router n'est en charge que de la partie requête-réponse des clients.
 * Il appelle seulement les méthodes de manipulation des données sur le service
 * mais ne connait pas la façon dont le service les manipule.
 * Ceci afin de séparer les domaines de responsabilité des modules :
 * 
 * Router <-> Service
 * -------------------------------------------------------------------------- */

// imports des modules nécessaire au router
// -----------------------------------------------------------------------------
const express = require('express') // on utilise express
const formService = require('./service') // formService renvoi à la page service.js

// création du router
// -----------------------------------------------------------------------------
const router = module.exports.router = express.Router() 

// définition des routes
// -----------------------------------------------------------------------------
router.get('/', function (request, response) {
    response.send(formService.getForm())
})

router.post('/', function(request, response) { //va à la racine de la page qui utiliser le router.post
  const newForm = formService.postForm(request.body)
  response.send(newForm)
})

// router.put('/', function(request, response) {
//   const updatedKitten = kittenService.updateKitten(request.body)
//   response.send(updatedKitten)
// })

// router.delete('/', function(request, response) {
//   kittenService.deleteKitten(request.body)
//   response.sendStatus(204)
// })
