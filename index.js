//Iteration#1

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

