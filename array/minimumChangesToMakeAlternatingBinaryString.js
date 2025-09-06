// Exercicio 1758 - Leet Code

// Resolução com padrão não definido
// O(n)

/*
    Gemini teve que me ajudar, não consegui imaginar essa solução.
*/

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let mudancasPadrao0101 = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === "1") {
        mudancasPadrao0101++;
      }
    } else {
      if (s[i] === "0") {
        mudancasPadrao0101++;
      }
    }
  }

  const mudancasPadrao1010 = s.length - mudancasPadrao0101;

  return Math.min(mudancasPadrao1010, mudancasPadrao0101);
};
