// Changer

function changeParent() {
   let verifier = document.querySelector(".element-1 div");
   let carre = document.querySelector('.element-1-rouge');

   if (verifier == null) {
      document.querySelector('.element-1').appendChild(carre);
   }
   else {
      document.querySelector('.element-3').appendChild(carre);
   }
}

let change = document.querySelector(".btn-1");
change.addEventListener('click', changeParent)

// Compteur

let comptage = 0;

function compter() {

   comptage++;

   document.querySelector('.span-carre').textContent = comptage
}

let compteur = document.querySelector('.btn-1');
compteur.addEventListener('click', compter)

// Reset

function Reset() {
   comptage = 0;
   document.querySelector('.span-carre').textContent = "0";
}

let reset = document.querySelector(".btn-2");
reset.addEventListener('click', Reset);