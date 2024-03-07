const resulta = document.getElementsByClassName('resulta');
const clik = document.getElementsByClassName('img');
const body = document.getElementsByClassName('body');
let num = 0;

console.log(clik, resulta, body);

function cunter() {
    console.log('clik');
}

// Boucle à travers chaque élément avec la classe 'img' et ajoute l'écouteur d'événements
for (let i = 0; i < clik.length; i++) {
    clik[i].addEventListener("click", (e) => {
        num += 1;
        console.log('clik ' + num);

        if(num === 10){
            document.body.classList.add('badground');
            document.body.style.backgroundColor = 'red';        }
        // Parcourir chaque élément de la collection resulta
        for (let j = 0; j < resulta.length; j++) {
            // Mettre à jour le contenu HTML de chaque élément avec la valeur de num
            resulta[j].innerHTML = num;
        }
    });
}

console.log( resulta);
