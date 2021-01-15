import {landingPage} from './landing';
import {menuPage} from './menu';
import {contactPage} from './contact';
import {nav} from './nav'


const content = document.querySelector("#content");
const main = document.querySelector("main");

content.append(nav());
content.append(landingPage());

content.addEventListener("click",(e) => {
    
    if(e.target.className === "contact"){
         content.innerHTML = "";
         content.append(nav());
         content.append(contactPage());
     } else if(e.target.className === "home"){
        content.innerHTML = "";
        content.append(nav());
        content.append(landingPage());
    } else if(e.target.className === "menu"){
        content.innerHTML = "";
        content.append(nav());
        content.append(menuPage());
    } 
 });
 


/*
else if(e.target.className === "menu" && e.target.id === "content"){
         main.innerHTML = "";
         content.append(menuPage());
     } 
*/