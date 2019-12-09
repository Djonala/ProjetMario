
                            // écrit dans la console du navigateur dès que le script est chargé
                            // dans le <head> du html
console.log('ça marche !');




                            /** ----------------------------------------------------------------------------
                             * PARTIE 1 : réagir à l'événement de clique sur le bouton du formulaire
                             * @see https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Les_%C3%A9v%C3%A8nements_et_le_DOM
                             * -------------------------------------------------------------------------- */
                            // ici on diffère l'exécution de notre code
                            // au déclenchement de l'événement DOMContentLoaded envoyé par le navigateur
                            // lorsque la page est complètement chargée (HTML et CSS affichés à l'écran)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Le chargement de la page est terminé');

                            // recherche le bouton du formulaire par un sélecteur CSS
                            // que l'on met dans la variable 'submit'
    const submit = document.querySelector('input[type="submit"]');
    console.log('Bouton Submit', submit);

                            // la variables submit est un object sur lequel on peut appeler des fonctions
                            // comme le addEventListener qui va nous permettre d'écouter et de réagir au click
                            // sur le bouton on déclenchant l'exécution de la fonction onClickSubmit
    submit.addEventListener('click', function() {
        console.log('Click sur le bouton submit');
    });
});

                            /** ----------------------------------------------------------------------------
                             * PARTIE 2 : récupérer les informations saisies dans le formulaire
                             * 
                             * Afin de clarifier le code, de l'optimiser et de le rendre réutilisable,
                             * ici nous dissocions la fonction de son context d'exécution : l'événement, en
                             * passant les fonctions callback en tant que VARIABLE.
                             * -------------------------------------------------------------------------- */

                            // ici, onContentLoaded fait référence à la fonction de même nom
                            // EN TANT QUE VARIABLE et non pas en tant que fonction exécutée.
                            // En plus simple, ne pas confondre les syntaxes :
                            // - onContentLoaded qui est la variable identifiant la fonction
                            // - onContentLoaded() qui exécute la fonction
document.addEventListener('DOMContentLoaded', onContentLoaded);

function onContentLoaded() { 
                            // recherche le formulaire de la page
    const form = document.querySelector('form');
    console.log('Formulaire', form);
                            // inscrit la fonction onFormSubmit à l'événement Submit
                            // envoyé par le navigateur lorsque le bouton <input type="submit"> 
                            // est actionné par l'utilisateur
            
    form.addEventListener('submit', onFormSubmit);

    const boutonImage = document.querySelector('input[type="image" i]');
    console.log('mesBoutonsImage',boutonImage);
    boutonImage.addEventListener('input', onFormImage);
}



function onFormSubmit(event) {
                            // au submit du formulaire, le navigateur va donc déclencer l'exécution de
                            // cette fonction en passant un paramètre contenant les informations
                            // de l'événement lui-même et non du formulaire.
                            // En gros, dans event, on ne récupère pas les informations saisies dans le formulaire.
                            // Et pour éviter la soumission par défaut du formulaire, il faut l'annuler
                            // en appelant preventDefault() sur l'événement du navigateur pour lui indiquer
                            // de ne rien faire lorsque le formulaire est soumis.
    event.preventDefault();
                            // Ensuite, on récupère à la main les informations saisie dans les input
    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const email = document.getElementById('email');                          
    
    const span1 = document.getElementById('span1');
    messageErrorUndefined(prenom,span1);
    messageErrorTooStrong(prenom,span1);

    const span2 = document.getElementById('span2');
    messageErrorUndefined(nom,span2);
    messageErrorTooStrong(nom,span2);

    const span3 = document.getElementById('span3');
    messageErrorUndefined(email,span3);
    messageErrorTooStrong(email,span3);
}

// Fonction qui recupère l'élement et la span correspondante et applique un 
// message en cas de champ vide
function messageErrorUndefined(input,span) {
    if (!input.value) {
        span.innerHTML='* Saisie obligatoire.';
    }
}
// Fonction qui recupère l'élement et la span correspondante et applique une
// une erreur en cas de champ trop court
function messageErrorTooStrong(input,span) {
    if (input.value.lengh < 2){
        span.innerHTML='* Valeur trop courte.';
    }
}

function onFormImage(event){
    event.preventDefault();
    console.log('je sui dans la fonction onformImage');
}
