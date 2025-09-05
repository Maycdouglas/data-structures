// Exercicio 219 - Leet Code

// Resolução com HASH MAP
// O(n)

/*
Inicialmente, minha resolução era O(n^2), pois eu iterava sobre uma lista que era o valor da chave do map.
Após conversar com o Gemini, notei que não precisava de uma lista e sim apenas armazenar o indice da ultima posicao 
que aquele numero foi visto

*/

// MINHA PRIMEIRA SOLUÇÃO (27ms - Beats 30.87% | 76.84 MB - Beats 24.36%):
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // contagem com hash map?

  let frequencias = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (frequencias.get(nums[i])) {
      return true;
    }
    frequencias.set(nums[i], 1);
  }

  return false;
};

// RESOLUÇÃO COM SET, foi a mais perfomática no leet code
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//     let seen = new Set();
//     for (num of nums){
//         if(seen.has(num)){
//             return true
//         }
//         seen.add(num)
//     }
//         return false
// };
