let loginBtn = document.getElementById('loginBtn');
let logoutBtn = document.getElementById('logoutBtn');
let users = [];

//charger les users du json

fetch("user.json")
.then(response=>response.json())
.then(data=>users=data)
.catch(error=>console.log(error)
)

loginBtn.addEventListener("click",()=>{
    let userInput=document.getElementById("username").value.trim();
    let passInput=document.getElementById("password").value.trim();

const match=users.find(u=>u.username === userInput && u.password === passInput)

if (match){
    localStorage.setItem('connecteduser', match.username);
    document.getElementById('status').innerText = `Bonjour ${match.username}`
    // location.href="index.html"
    
}
else{
   document.getElementById('status').innerText = `Erreur sur le mot de passe ou le username`;
}
});

logoutBtn.addEventListener('click',()=>{

   document.getElementById("username").value="";
   document.getElementById("password").value="";

    localStorage.removeItem('connecteduser');
    document.getElementById('status').innerText=('Disconnected');
    userInput="";
    userInput="";
})

//verifier si le user existe déja 

window.onload= ()=>{
const user = localStorage.getItem('connecteduser')
if (user) {
    document.getElementById('status').innerText = `vous etes deja connecté ${user}`;
}
}