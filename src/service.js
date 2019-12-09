/** ----------------------------------------------------------------------------
 * Le service n'est chargé que de manipuler les données
 * dans la base de données (ici un tableau) mais ne connait
 * en aucun cas la requête et la réponse du client.
 * Ceci afin de séparer les domaines de responsabilité des modules :
 * 
 * Router <-> Service
 * 
 * Le router quant à lui, n'est chargé que de s'occuper des requêtes
 * et des réponses du client. Il ne sait pas comment fonctionne le service, 
 * et appelle seulement ses méthodes de manipulation de données.
 * -------------------------------------------------------------------------- */

// simulation de la base de données
// -----------------------------------------------------------------------------
const formsdb = [
    { id: Date.now(), name: 'felix' },
    { id: Date.now(), name: 'eden' }
  ]
  
  // définition des méthodes de CRUD sur les kittens du tableau
//   // -----------------------------------------------------------------------------
  module.exports.getForm = function() {
    return formsdb
  }
  
  module.exports.postForm = function(form) {
    form.id = Date.now()
    formsdb.push(form)
    return form
  }
  
//   module.exports.updateKitten = function(kitten) {
//     const kittenInDb = kittensdb.find(function(kittenLine) {
//       return kittenLine.id === kitten.id
//     })
//     kittenInDb.name = kitten.name
//     return kittenInDb
//   }
  
//   module.exports.deleteKitten = function(kitten) {
//     const kittenInDb = kittensdb.find(function(kittenLine) {
//       return kittenLine.id === kitten.id
//     })
//     kittensdb.splice(kittensdb.indexOf(kittenInDb), 1)
//   }