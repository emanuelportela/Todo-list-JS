// Clique - Exercice 2

var x = document.querySelectorAll('a');
x[1].addEventListener('click', refresh1);

function refresh1() {
   event.preventDefault();
   document.querySelector('.section1').style.display="none";
   document.querySelector('.section2').style.display="initial";
   document.querySelector('.section3').style.display="none";
   document.querySelector('.section4').style.display="none";
   document.querySelector('.section5').style.display="none";
   document.querySelector('.section6').style.display="none";
}

// Clique - Exercice 3

var x = document.querySelectorAll('a');
x[2].addEventListener('click', refresh2);

function refresh2() {
   event.preventDefault();
   document.querySelector('.section1').style.display="none";
   document.querySelector('.section2').style.display="none";
   document.querySelector('.section3').style.display="initial";
   document.querySelector('.section4').style.display="none";
   document.querySelector('.section5').style.display="none";
   document.querySelector('.section6').style.display="none";
}

// Clique - Exercice 4

var x = document.querySelectorAll('a');
x[3].addEventListener('click', refresh3);

function refresh3() {
   event.preventDefault();
   document.querySelector('.section1').style.display="none";
   document.querySelector('.section2').style.display="none";
   document.querySelector('.section3').style.display="none";
   document.querySelector('.section4').style.display="initial";
   document.querySelector('.section5').style.display="none";
   document.querySelector('.section6').style.display="none";
}

// Clique - Exercice 5

var x = document.querySelectorAll('a');
x[4].addEventListener('click', refresh4);

function refresh4() {
   event.preventDefault();
   document.querySelector('.section1').style.display="none";
   document.querySelector('.section2').style.display="none";
   document.querySelector('.section3').style.display="none";
   document.querySelector('.section4').style.display="none";
   document.querySelector('.section5').style.display="initial";
   document.querySelector('.section6').style.display="none";
}

// Clique - Exercice 6

var x = document.querySelectorAll('a');
x[5].addEventListener('click', refresh5);

function refresh5() {
   event.preventDefault();
   document.querySelector('.section1').style.display="none";
   document.querySelector('.section2').style.display="none";
   document.querySelector('.section3').style.display="none";
   document.querySelector('.section4').style.display="none";
   document.querySelector('.section5').style.display="none";
   document.querySelector('.section6').style.display="initial";
}



// Autre manière de faire

/* var listexo = document.querySelector('.exercice2');
var listexo2 = document.querySelector('.exercice3');

var exo1Hidden = document.querySelector('.exercice1');

function refresh() {
    event.preventDefault();
    exo1Hidden.classList.add('hidden');
    listexo.classList.remove('hidden');
    listexo2.classList.remove('hidden');
}

let btn = document.querySelector('.exo2');
let btn2 = document.querySelector('.exo3');

btn.addEventListener('click', refresh);
btn2.addEventListener('click', refresh); */
