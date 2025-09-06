// Exercicio 541 - Leet Code

// Resolução com Two Pointers
// O(n)

/*
Confesso que ainda não entendi muito bem o trecho do min e o trecho da questão em si:

If there are fewer than k characters left, reverse all of them. If there are less than 2k but 
greater than or equal to k characters, then reverse the first k characters and leave the other as original.

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let chars = s.split("");

  for (let i = 0; i < chars.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, chars.length - 1);

    while (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }

  return chars.join("");
};
