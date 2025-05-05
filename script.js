//alert('Je suis le beau bouton de vérification de palindrom');

//Nous allons cibler le conteneur de recette 
let container = document.getElementById("recette-container");

//limiter le nombre de carte à 6
let limiteCarte = recettes.slice(0,10);
//Boucle pour injecter les recettes dans le container  

recettes.forEach(recette =>{
    const carte =document.createElement("div");
    carte.classList.add("carte");
    carte.innerHTML =
    `<img src = "${recette.image}" alt="${recette.titre}" />
    <h4> ${recette.titre}</h4>
    <p> ${recette.description.slice(0,10)}...</p>
    <p> ${recette.date}</p>`
    ;
    container.appendChild(carte);
})