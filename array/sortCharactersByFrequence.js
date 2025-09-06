// Exercicio 451 - Leet Code

// Resolução com HASH MAP
// O(n)

/*

*/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // vou precisar de um map para armazenar.
  // o q farei depois nao sei ainda

  const frequenciaChar = new Map();

  for (let i = 0; i < s.length; i++) {
    if (frequenciaChar.has(s[i])) {
      frequenciaChar.set(s[i], frequenciaChar.get(s[i]) + 1);
    } else {
      frequenciaChar.set(s[i], 1);
    }
  }

  return (chavesOrdenadas = [...frequenciaChar.entries()]
    .sort((a, b) => b[1] - a[1])
    .flatMap(([chave, valor]) => Array(valor).fill(chave))
    .join(""));
};
