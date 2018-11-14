/*
// // 1. querySelector
// 
// //    1.1. innerText
// 
// document.querySelector('div').innerText = 'Hello World';
// document.querySelector('h1').innerText = "Chahid est gros";
// 
// Ce sélecteur permet d'ajouter du texte dans une élément sélectionné.
// 
// //    1.2. innerHTML
// 
// document.querySelector('p').innerHTML = "<h2>Oui c'est vrai</h2>";
// 
// Ce sélecteur permet d'ajouter un élément avec du texte dans un autre élément.
// 
// 
// // 2. getElementById
// 
// //    2.1. Normalement
// 
// // document.getElementById("zak").innerText = "Je suis Zak";
// 
// //    2.2. Avec une variable
// 
// var zaki = document.getElementById('zaki');
// 
// zaki.innerHTML = "Salut, je m'appelle zaki";
// 
// 
// // 3. querySelectorALl
// 
// document.querySelectorAll('p')
// 
// document.querySelectorAll('p')
// 
// // document.getElementById('zak').className = "text blue"
// 
// document.getElementById("zak").classList.add("text");
// document.getElementById("zak").style.backgroundColor="grey";

// EXO //

/* document.querySelector('p').innerText = 'Hello World';

document.getElementById("para").classList.add("size", "color", "bcc");

document.querySelectorAll("p")[2].classList.remove("un", "deux");

document.getElementById("para3").style.backgroundColor="grey".font-color="red";

// Correction //

// let p1 = document.querySelectorAll('p')[0];
// let p2 = document.querySelectorAll('p')[1];
// let p3 = document.querySelectorAll('p')[2];
// let p4 = document.querySelectorAll('p')[3];
// 
// p1.innerText = "Salut";
//  
// p2.classList.add('size', 'color', 'bcc')



// CORRECTION CHACHA 

var allP = document.querySelectorAll("p");

// Premier P  Ajouter du texte avec dom
allP[0].innerText = "Coucou";

// Deuxieme creer 3 classe avec dom
allP[1].classList += "classeUne classeDeux classeTrois";

// Trois supprimer deux classe avec dom
allP[2].classList.remove("un", "deux");

//quatre  ajouter du style avec dom
allP[3].style.backgroundColor = "blue"



let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');

btn1.addEventListener('click', afficher); 
btn2.addEventListener('click', classe); 
btn3.addEventListener('click', removing); 
btn4.addEventListener('click', stylise); 


function afficher() {
   allP[0].innerText = "Exercice 1 : Coucou";
}

function classe() {
   allP[1].classList += "classeUne classeDeux classeTrois";
}

function removing() {
   allP[2].classList.remove("un", "deux");
}

function stylise() {
   allP[3].style.backgroundColor = "green"
}


// Exo bouton

let btn5 = document.querySelector('.btn5');
 
btn5.addEventListener('click', bouton5); 


function bouton5() {
   var nom = document.getElementById("text1").value;
   allP[4].innerText = nom;
}

// BOUTON - x10
let btn = document.querySelector('.zak')

function newBtn() {
   
   let x = document.createElement("button");

   x.setAttribute('type','module'); 
   x.setAttribute('class','zak');
   
   x.innerText = "Salut";

   document.querySelector('div').appendChild(x);

}

btn.addEventListener('click', newBtn)

*/