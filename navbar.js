export default function createNavbar(){
    const nav = document.createElement('nav');
    nav.innerHTML = `
    <ul style = "display:flex ; gap: 20px ; list-style:none; padding: 0">
    <li><a href="about.html">A propos</li>
    <li><a href="contact.html">Contact</li>
    </ul>
    `;
    nav.style.background = "red";
    nav.style.padding="12px";

   
return nav
}
