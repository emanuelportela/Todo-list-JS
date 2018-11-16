var resultat = 0;

function calcul() {
   var x = document.getElementById('number1').value;
   var y = document.getElementById('number2').value;
   resultat = parseInt(x)+parseInt(y);
   document.getElementById('reponse').innerText = resultat;

   document.getElementById('number1').value = '';
   document.getElementById('number2').value = '';
}

document.querySelector('.egal').addEventListener('click', calcul);