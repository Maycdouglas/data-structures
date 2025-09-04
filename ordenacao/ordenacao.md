# ORDENAÇÃO

Os algoritmos de ordenação podem ser simples (n^2) ou eficentes (n log n)

## ESCALABILIDADE

Um algoritmo de ordenação é estável se ele preserva a ordem relativa original dos elementos que têm chaves de ordenação iguais.

Se um elemento A aparecia antes de um elemento B e ambos têm o mesmo valor, após a ordenação, A ainda aparecerá antes de B. Um algotimo instável não oferece essa garantia.


## BUBBLE SORT

## SELECTION SORT

## INSERTION SORT

## MERGE SORT

## QUICK SORT

### Observações
Por que o algoritmo QuickSort é O(n^2) no pior caso?
  - Ocorre quando o pivô escolhido é consistentemente o menor ou o maior elemento do subarray.
  - Isso faz com que a partição seja extremamente desbalanceada (uma partição com n - 1 elementos e outra com 0).
  - Em vez de dividir o problema pela metade (log n níveis de profundidade), o algoritmo apenas diminui o problema em 1 a cada passo (n níveis de profundidade), comportando-se como um loop aninhado.

## Exercícios Propostos
- 0148 - Sort List - Medium
- 0912 - Sort an Array - Medium
- 0075 - Sort Colors - Medium
- 1122 - Relative Sort Array