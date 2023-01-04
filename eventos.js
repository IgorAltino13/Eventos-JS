let conta = 3; 


let clique = document.querySelector("button");

clique.addEventListener("click",() => {
    conta++;
    document.querySelector("h1").innerHTML = `Você clicou ${conta} vezes`;
    //document.querySelector("#teste ul li").append("Teste13");
    let newItem = document.createElement("li");
    newItem.innerText = `Item ${conta}`;
    document.querySelector("#teste ul").append(newItem);
});

//document.querySelector("#teste ul").innerHTML += "<li> Testando...</li>";




let clique = document.querySelector('button');

clique.addEventListener('click',() =>{
    document.querySelector()
})




let newUl = document.createElement("ul");
for(let i =0 ;i <5;i++){
    let newLi = document.createElement("li");
    newLi.innerText = "Novo li";
    newUl.append(newLi);
}

document.querySelector("ul").before(newUl);

let input = document.createElement("input");
document.querySelector("button").after(input);
//setando atributos no input
document.querySelector("input").setAttribute('placeholder','nome');




