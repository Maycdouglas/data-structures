// Exercicio 1160 - Leet Code

// Resolução com Hash Map
// O(n + m), sendo n o numero de caracteres em chars e m o numero de caracteres em words

/*
Problemas que envolvem frequencia de letras parecem ser uteis usar arrays de tamanho 26, pois apresenta performance melhor.

*/

// MINHA SOLUÇÃO
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  // um map para words e outro map para chars?
  // assim eu poderia comparar a frequencia das letras em cada um e definir se funciona ou não. Junto eu deixo um contador ligado e coloc ele na soma total

  let somaTotal = 0;
  let somaAtual = 0;

  const frequenciaChars = new Map();
  let word, copiaFrequenciaChars;

  // percorro os chars e os mapeio
  for (char of chars) {
    if (frequenciaChars.has(char)) {
      frequenciaChars.set(char, frequenciaChars.get(char) + 1);
    } else {
      frequenciaChars.set(char, 1);
    }
  }

  // percorro as palavras e verifico se tem chars disponiveis para formá-las
  for (let i = 0; i < words.length; i++) {
    somaAtual = 0;
    copiaFrequenciaChars = new Map(frequenciaChars);
    for (let j = 0; j < words[i].length; j++) {
      word = words[i];

      if (
        copiaFrequenciaChars.has(word[j]) &&
        copiaFrequenciaChars.get(word[j]) !== 0
      ) {
        copiaFrequenciaChars.set(
          word[j],
          copiaFrequenciaChars.get(word[j]) - 1
        );
        somaAtual++;
      } else {
        somaAtual = 0;
        break;
      }
    }
    somaTotal = somaTotal + somaAtual;
  }

  return somaTotal;
};

// SOLUÇÃO PERFORMÁTICA DO LEET CODE

// /**
//  * @param {string[]} words
//  * @param {string} chars
//  * @return {number}
//  */
// var countCharacters = function (words, chars) {
//     let charsFreq = new Array(26).fill(0);
//     for (let i = 0; i < chars.length; i++) {
//         let idx = chars[i].charCodeAt() - 'a'.charCodeAt();
//         charsFreq[idx]++;
//     }

//     let result = 0;
//     let wordFreq = new Array(26).fill(0);
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];

//         for (let j = 0; j < word.length; j++) {
//             let idx = word[j].charCodeAt() - 'a'.charCodeAt();
//             wordFreq[idx]++;
//         }

//         let exist = true;
//         for (let i = 0; i < wordFreq.length; i++) {
//             if (wordFreq[i] > charsFreq[i]) {
//                 exist = false;
//                 break;
//             }
//         }

//         if (exist) result = result + word.length;
//         wordFreq.fill(0);
//     }

//     return result;
// };
