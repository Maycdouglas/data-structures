// Exercicio 1 - Leet Code

// Resolução com HASH MAP
// O(n)

/*
Existem outras duas resoluções:
    - O(n^2)
        - na qual eu compararia cada elemento com todos os outros
    - O(n log n)
        - na qual eu ordenaria os elementos e teria que criar uma nova lista para armazenar os pares (elemento, indice) 
        para nao perder referencia a lista original
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numerosMapeados = new Map();
  let numeroAtual;
  let complemento;

  for (let i = 0; i < nums.length; i++) {
    numeroAtual = nums[i];
    complemento = target - numeroAtual;

    if (numerosMapeados.has(complemento)) {
      return [numerosMapeados.get(complemento), i];
    }

    numerosMapeados.set(numeroAtual, i);
  }
};
