let conta = 0; 


let clique = document.querySelector("button");

clique.addEventListener("click",() => {
    conta++;
    document.querySelector("h1").innerHTML = `Você clicou ${conta} vezes`;
});

