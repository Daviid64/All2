 export default function createCard(){
   
    const card = document.createElement('div');
    const style = card.style
    style.border= "5px";
    style.borderColor="red"
    style.padding="2px";
    style.width="400px";
    style.height="400px";
    style.boxShadow="2px 2px 10px rgba(0, 0, 0, 0.1)";
    style.margin="10px"
    style.textAlign="center"

    card.innerHTML=`
    <img src="Profil.jpg" alt="" style= "width: 150px;border-radius: 5px 0 5px 0 "/>
    <h2>Mon Profil</h2>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error natus doloremque ratione dolores! Doloremque, voluptatibus eaque. Voluptatibus iure nisi quae deserunt iste quos tenetur eveniet cumque perspiciatis, voluptates, praesentium dolor.</p>
    `

    return card 
}

function bgDark(){
    const btn = document.createElement('button')
    btn.innerText= "WhiteMod"
    btn.addEventListener('click',()=>{
    btn.innerText= "darkMod"
        document.body.style.background="black";
        document.body.style.color="white";
        
    });
    


return btn 
}

bgDark();

export {createCard,bgDark}