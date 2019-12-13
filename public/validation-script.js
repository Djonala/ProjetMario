            // Cette fonction prend en paramètre un input
            // et retourne si sa valeur est définie ou non
function shouldNotBeNull(input) {
  return !!input.value;
}

            // Cette fonction prend en paramètre un input
            // et retourne si la longueur de sa valeur est supérieure
            // ou égale au paramètre 'length' passé à la fonction.
            //
            // => le controle est ainsi dynamique car c'est
            // le code qui appelle cette fonction qui décide de la longueur
            // que la valeur doit respecter.
function shouldHaveLength(input, length) {
  return input.value.length >= length;
}

            // Cette fonction prend en paramètre l'id du span
            // qui doit être créé, ainsi que le message à afficher dans le span
            // et une fonction callback qui est appelée pour placer dans le DOM le span
            // créé.
function displayErrorMessage(spanId, message, appendSpanFunction) {
            // recherche un span existant avec l'id
  let span = document.getElementById(spanId);
  if (!span) {
              // s'il n'existe pas, on le créer
    span = document.createElement('span');
    span.setAttribute('id', spanId);
              // on appelle la fonction callback avec le span en paramètre
              // qui doit le place dans le DOM.
              // Ici, placer le span n'est pas de la responsabilité de cette fonction.
              // C'est le code appelant qui sait où le span doit être placé.
    appendSpanFunction(span);
  }
              // affiche le message dans le span
  span.innerHTML = message;
}

              // Cette fonction supprimer le span par son id
function removeErrorMessage(spanId) {
  const span = document.getElementById(spanId);
  if (span) {
    span.remove();
  }
}