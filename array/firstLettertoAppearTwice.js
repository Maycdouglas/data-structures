// Exercicio 2351 - Leet Code

// Resolução com SET
// O(n)

/*

*/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  // hashmap ou set

  let frequenciaLetras = new Set();

  for (char of s) {
    if (frequenciaLetras.has(char)) {
      return char;
    }

    frequenciaLetras.add(char);
  }
};
