// Exercicio 557 - Leet Code

// Resolução com e sem Two Pointers
// O(n)

/*
Identifiquei que era um problema de Two Pointers, então fiz assim, mas descobri que 
existe solução ainda melhor (mas com mesma complexidade temporal) usando métodos de Arrays no JavaScript.
Abaixo deixarei a minha versão comentada e a versão melhorada.

OBS: Em JavaScript as Strings são imutáveis, portanto, não é possível resolver esse problema sem 
a complexidade espacial ser O(n), pois inevitavelmente teremos que copiar os caracteres para um array.
Existe uma solução sem map, vou deixar ela aqui registrada:
return s.split("").reverse().join("").split(" ").reverse().join(" ")
*/

// SOLUÇÃO MELHORADA:
// não fiz em uma linha para deixar o código mais legível
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Divide a string em um array de palavras
  const words = s.split(" ");

  // Mapeia cada palavra para sua versão invertida
  const reversedWords = words.map((word) => {
    // transformo a string em array de caracteres, faço a reversão dos elementos, transformo em String novamente
    return word.split("").reverse().join("");
  });

  // transformo o array de palavras invertidas em uma string novamente;
  const result = reversedWords.join(" ");

  return result;
};

// MINHA SOLUÇÃO INICIAL:
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function(s) {
//     const caracteres = s.split(''); // converte a string para um array de caracteres
//     let inicioPalavra = 0;

//     // percorre todo o array
//     for(let i = 0; i <= caracteres.length; i++){
//         // verifica se está no final de uma palavra
//         if(caracteres[i] === ' ' || i === caracteres.length){
//             let esquerda = inicioPalavra;
//             let direita = i - 1; // posicao anterior

//             while(esquerda < direita){
//                 // desestruturação
//                 [caracteres[esquerda], caracteres[direita]] = [caracteres[direita], caracteres[esquerda]];

//                 esquerda++;
//                 direita--;
//             }

//             //atualizamos o inicio da palavra novamente
//             inicioPalavra = i + 1;
//         }

//     }

//     // transforma o array em String novamente
//     return caracteres.join('');
// };
