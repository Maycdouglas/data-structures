# Estrutura de Dados e Algoritmos

## Notação Big O

É uma forma de descrever o `desempenho` e a `escalabilade` de um algoritmo. 

Ela nos diz como o `tempo de execução` ou `o uso de memória cresce` à medida que o `tamanho da entrada` $$(n)$$ `aumenta`.

Big O foca no `pior cenário` (worst-case) e na `tendência de crescimento`, não no tempo exato em segundos.

Temos dois tipos de complexidade estudadas:

- `COMPLEXIDADE TEMPORAL`
  - Mede como o `tempo de execução` de um algoritmo `cresce em função` do `tamanho da entrada` $$(n)$$. 
- `COMPLEXIDADE ESPACIAL`
  - Mede como a `quantidade de memória adicional` (memória auxiliar) que um algoritmo precisa `cresce em função` do `tamanho da entrada` $$(n)$$.
    - `não contamos` a `memória` ocupada pela `própria entrada`, apenas o `espaço extra` que o algoritmo aloca.

### Complexidades mais comuns
- $$O(1)$$
  - O tempo de execução, ou uso de memória, é `constante`, `não importa o tamanho da entrada` $$(n)$$. É o `melhor cenário` possível.
  - Exemplo:
    - Acessa um elemento em um array pelo seu índice.
- $$O(log n)$$
  - O tempo de execução, ou espaço da memória alocado, `cresce muito lentamente`. Dobrar o tamanho da entrada `não dobra` o tempo de trabalho. Geralmente associado a algoritmos de `dividir para conquistar`.
  - Exemplo:
    - `Busca Binária (Binary Search)`
      - A cada passo, você `corta metade` dos elementos restantes   
- $$O(n)$$
  - O tempo de execução, ou uso da memória, `cresce linearmente` com o tamanho da entrada.
  - Se a entrada tem 10 itens, leva 10 unidade de tempo. Se tem 100 itens, leva 100.
  - Exemplo:
    - `Percorrer um array inteiro` com um loop for ou quando temos que `copiar o array` 
- $$O(n log n)$$
  - Um `meio-termo` comum e eficiente.
  - É o pilar de muitos `algoritmos de ordenação eficientes` e comum em algoritmos de `Dividir para Conquistar`
  - Dificilmente tem casos de algoritmo com essa complexidade espacial.
  - Exemplo:
    - Mergesort
    - Quicksort (no caso médio e melhor caso)
    - Eles dividem o trabalho (a parte $$log n$$) e depois juntam os resultados (a parte $$n$$)
- $$O(n^2)$$
  - O tempo de execução é `proporcional ao quadrado do tamanho da entrada`.
  - Geralmente acontece quando você precisa `comparar cada elemento` de uma coleção `com todos os outros`.
  - Exemplo:
    - Um `loop aninhado` (um for dentro de outro for) sobre a mesma coleção.
    - Usado no `Bubblesort`

### Observações
Por que a Busca Binária é O(log n) e o MergeSort é O(n log n), se ambos usam "Dividir para Conquistar"?
  - A diferença está no passo de "Conquistar/Combinar":
    - Busca Binária: a cada passo, ela joga fora metade dos dados e só precisa fazer uma única comparação (O(1)) para decidir qual metade seguir. O trabalho de combinar é trivial.
    - Mergesort: Após dividir as listas, ele precisa percorrer todos os elementos das sub-listas para combiná-las (mesclá-las) de forma ordenada. Esse passo de combinação leva tempo O(n).
  - Resumo da Lógica:
    - Se a cada divisão o trabalho é constante (O(1)), então a complexidade total será O(log n )
    - Se a cada divisão o trabalho é linear (O(n)), então a complexidade total será O(n log n) 
