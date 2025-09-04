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
- Por que a Busca Binária é O(log n) e o MergeSort é O(n log n), se ambos usam "Dividir para Conquistar"?
  - A diferença está no passo de "Conquistar/Combinar":
    - Busca Binária: a cada passo, ela joga fora metade dos dados e só precisa fazer uma única comparação (O(1)) para decidir qual metade seguir. O trabalho de combinar é trivial.
    - Mergesort: Após dividir as listas, ele precisa percorrer todos os elementos das sub-listas para combiná-las (mesclá-las) de forma ordenada. Esse passo de combinação leva tempo O(n).
  - Resumo da Lógica:
    - Se a cada divisão o trabalho é constante (O(1)), então a complexidade total será O(log n )
    - Se a cada divisão o trabalho é linear (O(n)), então a complexidade total será O(n log n)

## Localidade de Cache
O cache da CPU é uma memória extremamente pequena e rápida que fica dentro do próprio processador.
Acessar a memória RAM principal é uma operação muito lenta para os padrões da CPU. Para evitar que a CPU fique esperando por dados, ela busca um bloco de dados da RAM e o armazena no cache. Acessar o cache é quase instantâneo, então a CPU trabalha muito mais rápido se os dados que ela precisa já estiverem lá.
Portanto, Localidade de Cache é um princípio de otimização onde a CPU carrega na sua memória cache (ultra-rápida) dados que estão próximos na memória principal.

### Analogia
Analogia da Geladeira e do Supermercado
- Você: É a CPU, que precisa de ingredientes (dados) para cozinhar (processar).
- Supermercado: É a Memória RAM. Grande, tem tudo, mas é longe e demorado par air até lá.
- Geladeira: É o Cache da CPU. Pequena, mas está ao seu lado e pegar algo dela é instantâneo.

Quando você precisa de leite (um dado), você vai ao supermercado (RAM). Mas você não traz apenas o leite. Você aproveita a viagem e traz uma sacola de compras (Cache Line) com coisas que provavelmente usará em breve: leite, ovos, manteiga
- Cache Hit (SUCESSO!): Quando você precisa de ovos logo ems eguida, abre a geladeira e eles já estão lá! Rápido e eficiente.
- Cache Miss (FALHA!): Se você precisa de um abacate e não o trouxe, terá que fazer uma nova e demorada viagem ao supermercado. Lento e ineficiente.

## Overhead de Memória
É toda a memória extra que a estrutura precisa para organizar e gerenciar os dados, além da memória usada pelos próprios dados. É o custo administrativo da estrutura em termos de espaço.

## Comparações de Estruturas de Dados

### Array VS Linked List
- Qual estrutura, entre Array e Linked List, se beneficia mais da Localidade de Cache?
  - Arrays se beneficiam enormemente disso. Por serem contíguos, ao acessar array[i], a CPU provavelmente já pré-carregou array[i+1], array[i+2], etc. Isso torna a iteração sequencial em arrays extremamente rápida na prática
  - Linked Lists têm péssima localidade cache, pois seus nós estão espalhados pela memória.
- Qual estrutura de dados, entre Linked List e Array tem maior overhead (custo extra) de memória?
  - Linked lists, pois cada nó precisa de espaço extra para armazenar o ponteiro, além do dado em si. Um Array armazena apenas os dados, de forma compacta.
- Quando é melhor usar um Array e quando é melhor usar uma Linked List?
  - Use um Array quando:
    - A prioridade é acesso rápido por índice
    - O número de elementos é relativamente fixo
    - As operações de inserção/remoção são raras ou acontecem principalmente no final
    - A performance de iteração sequencial é crítica (Devido a localidade de cache)
  - Use uma Linked List quando:
    - A prioridade são isnerções e deleções rápidas no início da coleção
    - O número de elementos é muito dinâmico e imprevisível
    - O acesso por índice não é uma operação comum.
- Qual é o Overhead de Memória de um Array vs uma Linked List?
  - Array
    - Tem um overhead praticamente zero. A memória alocada é quase 100% usada para armazenar os dados em si. É extremamente eficiente em espaço.
  - Linked List
    - Tem um overhead significativo. Cada elemento (nó) precisa de espaço extra para armazenar pelo menos um ponteiro.
- Quando o Overhead de Memória de uma Linked List se torna um problema real?
  - Ao armazenar muitos itens pequenos
    - Se você está armazenando bilhões de números pequenos, o custo dos ponteiros pode facilmente exceder o custo dos dados, consumindo uma qunaitdade massiva e desncessária de RAM
  - Em ambientes com memória limitada
    - Em sistemas embarcados, microcontroladores ou dispositivos móveis antigos, cada byte de memória conta. Usar uma Linked List pode ser inviável.
