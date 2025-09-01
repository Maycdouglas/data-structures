// Exercicio 387 - Leet Code

// Resolução sem e com HASH MAP
// O(n)

/*
Minha resolução originalmente foi utilizando Hash Map. Ela era O(n), mas no gráfico do LeetCode foi uma das piores.
Olhei resoluções que outras pessoas fizeram e vi que dava para resolver sem HashMap, apenas usando métodos de Array no JavaScript.
Abaixo deixei tanto a solução baseada nessas que li quanto as soluções que fiz sozinho.

OBS: a melhor solução de todas criava um string com todas as letras do alfabeto e percorria essa string vendo qual
tinha a primeira ocorrencia unica. Para entradas extremamente grandes isso é excelente.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
};

// Primeira solução:
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var firstUniqChar = function(s) {

//     let caracteresMapeados = new Map();
//     let contador;
//     let arrayAux;

//     for(let i = 0; i < s.length; i++){
//         if(caracteresMapeados.has(s[i])){
//             arrayAux = caracteresMapeados.get(s[i]) // recebe o array [indice, quantidade]
//             contador = arrayAux[1]; // recebe o valor do contador;
//             contador++; // incrementa o valor do contador
//             arrayAux[1] = contador; // atualiza o array com o novo valor do contador;
//             caracteresMapeados.set(s[i], arrayAux); // atualiza o map com o novo array
//         } else {
//             caracteresMapeados.set(s[i], [i,1]); // insere no map a chave caractere e a lista [indice, quantidade];
//         }
//     }

//     for (const valores of caracteresMapeados.values()){
//         console.log(valores)
//         if(valores[1] === 1){
//             return valores[0];
//         }
//     }

//     return -1;
// };

// SEGUNDA SOLUÇÃO - igual a primeira, mas mais legível e enxuta:
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var firstUniqChar = function(s) {

//     let caracteresMapeados = new Map();
//     let contador;
//     let arrayAux;

//     for(let i = 0; i < s.length; i++){
//         if(caracteresMapeados.has(s[i])){
//             const[indice, contador] = caracteresMapeados.get(s[i]); // Utiliza desestruturação
//             caracteresMapeados.set(s[i], [indice, contador + 1]);
//         } else {
//             caracteresMapeados.set(s[i], [i,1]); // insere no map a chave caractere e a lista [indice, quantidade];
//         }
//     }

//     for (const valores of caracteresMapeados.values()){
//         if(valores[1] === 1){
//             return valores[0];
//         }
//     }

//     return -1;
// };

// MELHOR RESOLUÇÃO DO LEET CODE:
// * @param {string} s
//  * @return {number}
//  */
// var firstUniqChar = function(s) {
//      const letters = "abcdefghijklmnopqrstuvwxyz";
//   let smallestIdx = s.length + 1;

//   for (let i = 0; i < 26; i++) {
//     const ch = letters[i];
//     const first = s.indexOf(ch);
//     if (first !== -1 && first === s.lastIndexOf(ch) && first < smallestIdx) {
//       smallestIdx = first;
//     }
//   }
//   return smallestIdx === s.length + 1 ? -1 : smallestIdx;
// };
