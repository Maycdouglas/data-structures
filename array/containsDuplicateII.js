// Exercicio 219 - Leet Code

// Resolução com HASH MAP
// O(n)

/*
Inicialmente, minha resolução era O(n^2), pois eu iterava sobre uma lista que era o valor da chave do map.
Após conversar com o Gemini, notei que não precisava de uma lista e sim apenas armazenar o indice da ultima posicao 
que aquele numero foi visto

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let numerosMapeados = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numerosMapeados.has(nums[i])) {
      indiceMapeado = numerosMapeados.get(nums[i]);
      if (Math.abs(i - indiceMapeado) <= k) {
        return true;
      }
    }
    numerosMapeados.set(nums[i], i);
  }

  return false;
};
