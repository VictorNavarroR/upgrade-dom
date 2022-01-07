//Iteration#1
/*
//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btn = document.querySelector('.showme');

console.log(btn);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector('#pillado');

console.log(title);

//1.3 Usa querySelector para mostrar por consola todos los p
const allp = document.querySelectorAll('p');

for(let p of allp) {
    console.log(p);
}

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemons = document.querySelectorAll('.pokemon');

for(let pokemon of pokemons) {
    console.log(pokemon);
}

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testmes = document.querySelectorAll(`[data-function="testMe"]`);

for(let testme of testmes) {
    console.log(testme);
}

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const tercerPersonaje = testmes[2].innerHTML;
console.log(`Tercer personaje con attr testme: ${tercerPersonaje}`);
*/

//Iteration#2
//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const cleanDiv = document.createElement('div');
document.body.appendChild(cleanDiv); 

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divWithP = document.createElement('div');
const newP = document.createElement('p');

divWithP.appendChild(newP);

document.body.appendChild(divWithP);


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divWithPs = document.createElement('div');

for(let i = 0; i < 6; i++){
    const innerP = document.createElement('p');
    divWithPs.appendChild(innerP);
}

document.body.appendChild(divWithPs);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const dynamicP = document.createElement('p');
const textp = document.createTextNode('Soy dinámico!');

dynamicP.appendChild(textp);

document.body.appendChild(dynamicP);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const selecth2 = document.querySelector('h2.fn-insert-here');

selecth2.innerHTML = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const newUl = document.createElement('ul');


apps.forEach( elem => {
    let newli = document.createElement('li');
    let textLi = document.createTextNode(elem);
    newli.appendChild(textLi);
    newUl.appendChild(newli);
});

document.body.appendChild(newUl);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeNodes = document.querySelectorAll('.fn-remove-me');

removeNodes.forEach( elem => elem.remove());

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const divToInsert = document.body.children[6];
const middleP = document.createElement('p');
const mptext = document.createTextNode('Voy en medio!');
middleP.appendChild(mptext);

document.body.insertBefore(middleP, divToInsert);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insHereDivs = document.querySelectorAll('div.fn-insert-here');

insHereDivs.forEach(elem => {
    const insideP = document.createElement('p');
    const iptext = document.createTextNode('Voy en dentro!');
    insideP.appendChild(iptext);

   elem.appendChild(insideP);
});