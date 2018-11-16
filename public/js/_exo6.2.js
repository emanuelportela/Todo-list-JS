/*nombre1 = document.querySelector('.touche-1').value;
nombre2 = document.querySelector('.touche-2').value;
nombre3 = document.querySelector('.touche-3').value;
nombre4 = document.querySelector('.touche-4').value;
nombre5 = document.querySelector('.touche-5').value;
nombre6 = document.querySelector('.touche-6').value;
nombre7 = document.querySelector('.touche-7').value;
nombre8 = document.querySelector('.touche-8').value;
nombre9 = document.querySelector('.touche-9').value;
nombrePlus = document.querySelector('.touche-plus').value;
nombreMoins = document.querySelector('.touche-moins').value;
nombreFois = document.querySelector('.touche-fois').value
nombreDiviser = document.querySelector('.touche-diviser').value;
nombreC = document.querySelector('.touche-C').value;
nombreEgal = document.querySelector('.touche-egal').value;

let e = document.querySelector('.reponse')

function afficheUn() {
   e.value += 1;
}

nombre1.addEventListener('click', affiche);
*/



// METHODE MANU
/*
var resultat = 0;

function Un() {
   var nombre1 = document.querySelector('.touche-1').value;
   resultat = parseInt(nombre1);
   document.querySelector('.resultat').innerText = resultat;
}

document.querySelector('.touche-1').addEventListener('click', Un);

function Deux() {
   var nombre2 = document.querySelector('.touche-2').value;
   resultat = parseInt(nombre2);
   document.querySelector('.resultat').innerText = resultat;
}

document.querySelector('.touche-2').addEventListener('click', Deux);

function Trois() {
   var nombre3 = document.querySelector('.touche-3').value;
   resultat = parseInt(nombre3);
   document.querySelector('.resultat').innerText = resultat;
}

document.querySelector('.touche-3').addEventListener('click', Trois);


function Plus() {
   var nombrePlus = document.querySelector('.touche-plus').value;
   resultat = parseInt(nombrePlus);
   document.querySelector('.resultat').innerText = resultat;
}

document.querySelector('.touche-plus').addEventListener('click', Plus);
*/




// METHODE LUCAS

var nombre0 = document.querySelector('.touche-0');
var nombre1 = document.querySelector('.touche-1');
var nombre2 = document.querySelector('.touche-2');
var nombre3 = document.querySelector('.touche-3');
var nombre4 = document.querySelector('.touche-4');
var nombre5 = document.querySelector('.touche-5');
var nombre6 = document.querySelector('.touche-6');
var nombre7 = document.querySelector('.touche-7');
var nombre8 = document.querySelector('.touche-8');
var nombre9 = document.querySelector('.touche-9');
var plus = document.querySelector('.touche-plus');
var moins = document.querySelector('.touche-moins');
var fois = document.querySelector('.touche-fois');
var diviser = document.querySelector('.touche-diviser');
var C = document.querySelector('.touche-C');
var egal = document.querySelector('.touche-egal');
let operateur = "";

let elem1 = "";
let elem2 = "";
let result = "";
let index;

let e = document.querySelector(".reponse");

nombre1.addEventListener('click', function(){
   e.value += "1";
});

nombre2.addEventListener('click', function(){
   e.value += "2";
});

nombre3.addEventListener('click', function(){
   e.value += "3";
});

nombre4.addEventListener('click', function(){
   e.value += "4";
});

nombre5.addEventListener('click', function(){
   e.value += "5";
});

nombre6.addEventListener('click', function(){
   e.value += "6";
});

nombre7.addEventListener('click', function(){
   e.value += "7";
});

nombre8.addEventListener('click', function(){
   e.value += "8";
});

nombre9.addEventListener('click', function(){
   e.value += "9";
});

plus.addEventListener('click', function(){
   operateur = "+";
   elem1 = e.value;
   e.value += operateur;
});

moins.addEventListener('click', function(){
   operateur = "-";
   elem1 = e.value;
   e.value += operateur;
});

fois.addEventListener('click', function(){
   operateur = "*";
   elem1 = e.value;
   e.value += operateur;
});

diviser.addEventListener('click', function(){
   operateur = "/";
   elem1 = e.value;
   e.value += operateur;
});

egal.addEventListener('click', function(){
   switch(operateur) {

      case "+" :
         index = e.value.indexOf("+") + 1;
         elem2 = e.value.substring(index);
         result = Number(elem1) + Number(elem2);
         e.value = result;
      break;
      
      case "-" :
         index = e.value.indexOf("-") + 1;
         elem2 = e.value.substring(index);
         result = Number(elem1) - Number(elem2);
         e.value = result;
      break;

      case "*" :
         index = e.value.indexOf("*") + 1;
         elem2 = e.value.substring(index);
         result = Number(elem1) * Number(elem2);
         e.value = result;
      break;

      case "/" :
         index = e.value.indexOf("/") + 1;
         elem2 = e.value.substring(index);
         result = Number(elem1) / Number(elem2);
         e.value = result;
      break;
   
   }
})

function efface() {
   e.value = "";
}

C.addEventListener('click', efface);