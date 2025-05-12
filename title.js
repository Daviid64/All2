// On va creer une fonction qui génère un site 

function createTitle(text){
    const title =document.createElement('h1'); // Créer un élément du DOM
    title.textContent = text;
    title.style.fontFamily = 'Arial';
    title.style.color = 'lightBlue';

  

    return title; // On va retourner le titre pour qu'un autre script ou personne puisse l'utiliser

}

export default createTitle

