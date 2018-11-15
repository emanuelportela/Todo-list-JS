
let btn = document.querySelector('.btn');

btn.addEventListener('click', bouton); 


function bouton() {
   var nom = document.getElementById("text1").value;
   document.querySelectorAll("span")[0].innerText = nom;
   document.querySelector("#text1").value = "";
}