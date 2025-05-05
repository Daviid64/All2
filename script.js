//alert('Je suis le beau bouton de vérification de palindrom');

let vetement =["t-shirt","pantalon","veste"]
let chaussures =["baskets","bottes","tongues"]
let tableauSecondemain =["manteau","jogging","casquette"]
let all = ["baskets","bottes","tongues","manteau","jogging","casquette","t-shirt","pantalon","veste"]

const tableauFiltrer = all.concat(item => vetement.includes(item));
//Le mot item est une variable temporaire qui représente chaques élément du tableau all pendant que .filter() le parcourt
console.log(tableauFiltrer);

let list = document.getElementById('list');//Aller chercher l'id "#list" de la balise ul
let ligne = document.createElement('ul'); //Nous avons creer un nouvel element HTML(ul)
let contenu=ligne.textContent="element1"; //Rajouter du contenu text dans notre balise (h1)
ligne.style.color = "green";//Change la couleur du contenu de la balise <ul> 

list.appendChild(ligne);

let list2 = document.getElementById('h2-1');//Aller chercher l'id "#h2-1" de la balise h2
let ligne2 = document.createElement('h2'); //Nous avons creer un nouvel element HTML(h2)
let contenu2=ligne2.textContent="element2"; //Rajouter du contenu text dans notre balise (h1)
ligne2.style.color = "blue";//Change la couleur du contenu de la balise <h2>

list.appendChild(ligne2);

let list3 = document.getElementById('li-o');//Aller chercher l'id "#li-o" de la balise li
let ligne3 = document.createElement('li'); //Nous avons creer un nouvel element HTML(li)
let contenu3 =ligne3.textContent="element3"; //Rajouter du contenu text dans notre balise (h1)
ligne3.style.color = "yellow";//Change la couleur du contenu de la balise <li>

list.appendChild(ligne3);
