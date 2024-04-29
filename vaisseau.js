var posShipY = hauteur - 1; 
var posShipX = Math.floor((largeur - 1) / 2); 
function placerVaisseau() {
    var celluleVaisseau = document.querySelector(`tr:nth-child(${posShipY + 1}) td:nth-child({posShipX + 1})`);
    celluleVaisseau.innerHTML = '<img src="<M4GT3.jpg>" alt="vaisseau">';
}