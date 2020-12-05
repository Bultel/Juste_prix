window.onload = function (){

// Etape 1 - Sélectionner nos éléments

let input = document.querySelector ("#prix");
let error = document.querySelector ("small");
let formulaire = document.querySelector ("#formulaire");

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor ( Math.random () * 1001);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
  
    let instruction = document.createElement('div');
  
    if(nombre < nombreAleatoire) {
      // C'est plus
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus !";
      instruction.className = "instruction plus";
    }
    else if(nombre > nombreAleatoire) {
      // C'est moins
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moins !";
      instruction.className = "instruction moins";
    }
    else {
      // Félicitations vous avez trouvé le juste prix !
      instruction.textContent = "#" + coups + " ( " + nombre + " ) Félicitations vous avez trouvé le juste prix !";
      instruction.className = "instruction fini";
      input.disabled = true;
    }
  
    // Ajouter l'élément devant les autres
  document.querySelector('#instructions').prepend(instruction);
  
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener ("keyup", () => {
if (isNaN(input.value)) {
    // Afficher le message d'erreur
    error.style.display = "inline";
}
else {
    // Cacher le message d'erreur
    error.style.display = "none";
}
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener ("submit", (e) => {
     e.preventDefault ();  // supprime l'evenement par defaut du navigateur

    if (isNaN (input.value) || input.value == "" ) {
        // mettre une bordure rouge
        input.style.borderColor = "red";
    } 
    else {
        coups ++;
        // mettre une bordure grise
        input.style.borderColor = "silver";

        let nombreChoisi = input.value;
        input.value = "";
        verifier (nombreChoisi);
    }

});

}