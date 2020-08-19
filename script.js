//ADICIONANDO ELEMENTOS A UM ARRAY
const numeros = [1,2,3,6,9,23,12];
//inicio
//unshift faz empurar todos os valores para a direita
//para que coloque o numero especifico no comeco
numeros.unshift(1);
console.log(numeros);
//Meio
//splice faz no meio onde o primeiro valor seria a posição 
//o segundo voce coloca caso queira deletar algum numero se não é 0 
//e o terceiro o oque vai querer colocar no caso do exemplo é o 'a'
//E lembrando que a contagem começa a partir do 0
numeros.splice(7,0,'a');
console.log(numeros);

//Final
//Vai colocar o numero especifico no final do array
numeros.push(5);
console.log(numeros)