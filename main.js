//Le main.js sera porteur de tout nos modules 
import {createCard,bgDark} from "./script.js";


//On vérifie l'URL de la page
const path=location.pathname

//On affiche la card juste dans le cas ou la (endsWith) la fin de l'url est index.html ou (||) est strictement égale a "/" 
if (path.endsWith("index.html") || path === "/"){
const card = createCard()
document.body.prepend(card)
}

const bgDarc= bgDark()
//On ajoute au corp de l'élément 
document.body.prepend(bgDarc)
document.body.appendChild(card);

