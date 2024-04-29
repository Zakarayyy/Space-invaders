var largeur = 9;
var hauteur = 5;
var plateau = [];

function initPlateau() {
    var divContenu = document.getElementById('contenu');
    var tableau = document.createElement('table');
    for (var i = 0; i < hauteur; i++) {
        var ligne = document.createElement('tr');        
        for (var j = 0; j < largeur; j++) {
            var cellule = document.createElement('td');
            var img = document.createElement('img');
            img.src = 'Tesla.jpg'; 
            cellule.appendChild(img);
            ligne.appendChild(cellule);
        }
        tableau.appendChild(ligne);
    }
    divContenu.appendChild(tableau);
}
window.addEventListener('load', initPlateau);

function lancerPartie() {
    placerVaisseau();
}

document.getElementById('boutonJouer').addEventListener(onclick('lancerPartie'));