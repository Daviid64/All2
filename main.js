// Le main.js sera le porteur de tout mes modules 

import createTitle from "./title.js";
import createNavbar from "./navbar.js";

//On appelle cette fonction pour créer le titre 
const title = createTitle("La valeur de titre")

const navbar = createNavbar()
//On va l'ajouter au corp du document
document.body.appendChild(title)
document.body.prepend(navbar)

