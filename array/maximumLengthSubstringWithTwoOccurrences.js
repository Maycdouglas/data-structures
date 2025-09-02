// Exercicio 3090 - Leet Code

// Resolução com Sliding Window
// O(n)

/*

*/

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let inicioJanela = 0;
  let finalJanela = 0;
  let larguraMaxima = 1;
  const contador = new Map();
  contador.set(s[0], 1);

  while (finalJanela < s.length - 1) {
    finalJanela++;

    if (contador.has(s[finalJanela])) {
      contador.set(s[finalJanela], contador.get(s[finalJanela]) + 1);
    } else {
      contador.set(s[finalJanela], 1);
    }

    while (contador.get(s[finalJanela]) === 3) {
      contador.set(s[inicioJanela], contador.get(s[inicioJanela]) - 1);
      inicioJanela++;
    }

    larguraMaxima = Math.max(larguraMaxima, finalJanela - inicioJanela + 1);
  }

  return larguraMaxima;
};
