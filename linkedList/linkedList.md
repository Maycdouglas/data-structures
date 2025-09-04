# LINKED LIST

Uma Linked List é uma estrutura de dados que armazena seus elementos em nós (nodes) que podme estar espalhados pela memória.
Cada nó contém o dado e um ponteiro (um endereço de memória) que aponta para o próximo nó da sequência.
A ordem é mantida por esses ponteiros.

## Análise de Complexidade
- Leitura / Acesso (por índice)
    - Para acessar o elemento de índice i, você obrigatoriamente precisa começar pelo primeiro nó (head) e seguir os ponteiros i vezes. No pior caso (acessar o último elemento), você percorre a lista inteira.
- Inserção
    - No início = 0(1)
        - Basta criar um novo nó, fazer seu ponteiro apontar para o antigo head, e declarar o novo nó como o novo head. São poucas operações, não importa o tamanho da lista.
    - No fim ou meio = O(n)
        - A operação de religar os ponteiros é O(1), mas primeiro você precisa encontrar a posição correta, o que exige percorrer a lista a partir do início. A busca é o gargalo.
- Remoção
    - No início = 0(1)
        - Basta fazer o head apontar para o segundo elemento. O primeiro é esquecido (e coletado pelo garbage collector)
    - No fim ou meio = O(n)
        - O gargalo é encontrar o elemento a ser removido, o que exige percorre a lista


## Padrões de Resolução de Problemas
### Inversão Iterativa

- Complexidade:
    - Temporal
        - O(n)
            - percorremos a lista inteira exatamente uma vez
    - Espacial
        - O(1)
            - usamos apenas três ponteiros, independentemente do tamanho da lista

- Passos:
    - Usamos três ponteiros para percorrer a Linked List e religar as conexões:
        - previous
            - Começa como null
            - Guardará o nó anterior para podermos apontar para ele
        - current
            - Começa no head da lista. É o nó que estamos processando
        - next_node
            - usado para salvar temporariamente o próximo nó antes de quebrarmos a ligação original
    - Dentro do loop (enquanto current não for null):
        - Salve o próximo nó: next_node = current.next
        - Revertar o ponteiro: current.next = previous
        - Avance os ponteiros: previous = current e current = next_node

### Two Pointers (para N-ésimo Nó do Final)

Aqui está um exemplo direto, mas o funcionamento e ideia é basicamente a mesma descrita na página dos arrays.

- Complexidade
    - Temporal
        - O(n)
            - Apesar de dois ponteiros, a lista é percorrida apenas uma vez
    - Espacial
        - O(1)
            - usamos apenas dois ponteiros, independemente do tamanho da entraa 

- Ideia central
    - É uma técnica que utiliza dois ponteiros para percorrer a lista em uma única passagem.
    - Mantendo uma distância fixa entre eles, é possível encontrar um elemento relativo ao final sem saber o tamanho total da lista de antemão

- Sinais de uso
    - O problema pede para:
        - encontrar
        - remover
        - operar
    - no N-ésimo nó a partir do final de uma Linked List, idealmente em uma única passaagem (single pass)

- Exemplo
    - Encontre o N-ésimo nó do final da Linked List, com uma única passagem
        - Crie dois pontieros, ponteiro_direito e ponteiro_esquerdo, ambos começando na cabeça da lista
        - Avance o ponteiro_direito por N passos. Agora existe uma lacuna de N nós entre eles
        - Avance ambos os ponteiros juntos, um passo de cada vez, até que o ponteiro_direito chegue ao final da lista (ponteiro_direito == null)
        - Quando o ponteiro_direito estiver no final, o ponteiro_esquerdo estará posicionando exatamente no N-ésimo nó a partir do fim

### Fast & Slow Pointers
Basicamente uma das aplicações do Two Pointers que é usado em Arrays.

Também é conhecido como "A Lebre e a Tartaruga".

Padrão ideal para encontrar o meio de uma Linked List e para detectar se ela tem um ciclo.

- Complexidade:
    - Temporal:
        - O(n)
            - no pior caso, ambos os ponteiros percorrem a lista
    - Espacial:
        - O(1)
            - usamos apenas dois ponteiros

- Passos:
    - Dois ponteiros percorrem a lista a partir do head, mas em velocidades diferentes:
        - Ponteiro Lento (Slow): Move-se um nó por vez (slow = slow.next)
        - Ponteiro Rápido (fast): Move-se dois nós por vez (fast = fast.next.next)

- Exemplo
    - Encontrar o Meio da Lista
        - Quando o ponteiro fast chega ao final da lista (fast == null ou fast.next == next), o ponteiro slow estará exatamente no meio. Ele percorreu metade da distância no mesmo tempo
    - Deterctar um Ciclo
        - Se a lista tiver um ciclo, o ponteiro fast entrará nele e começará a girar.
        - O ponteiro slow eventualmente também entrará no ciclo.
        - Como estão se movendo em velocidades diferentes no mesmo circuito fechado, eles com certeza irão se encontrar em algum momento.
        - Se slow == fast em algum ponto, há um ciclo. Se fast chegar a null, não há ciclo.

### Mesclagem

- Complexidade
    - Temporal
        - O(n + m)
            - Onde n e m são os comprimentos das duas listas. Cada nó de ambas as listas é visitado exatamente uma vez
    - Espacial
        - O(1)
            - A abordagem padrão reutiliza os nós existentes, apenas religando os ponteiros.
            - Não é criada uma nova lista com cópias dos valores, apenas alguns ponteiros auxiliares.

- Ideia central
    - Técnica de combinar os nós de duas listas ligadas, que já estão individualmente ordenadas, para criar uma única lista ligada que também é ordenada

- Sinais de uso
    - O problema pede explicitamente para "mesclar duas (ou k) listas ordenadas"
    - É um subproblema de um algoritmo maior, como o Mergesort para Linked Lists
    - O problema envolve combinar múltiplos fluxos de dados ordenados mantendo a ordem geral

- Passos:
    1. Crie um nó cabeça falso (Dummy Node) para simplificar a inserção no início da nova lista.
    2. Crie também um ponteiro tail(cauda) que apontará para o último nó da nova lista
    3. Enquanto l1 e l2 ambas tiverem nós:
        - compare os valores de l1 e l2
        - anexe o nó com o menor valor à tail.next
        - Avance o ponteiro da lista da qual você removeu o nó (ex: l1 = l1.next)
        - Avance o ponteiro tail para o novo nó (tail = tail.next)
    4. Após o loop, uma das listas pode ter sobrado. Anexe o restante da lista não-vazia à tail.next
    5. Retorne dummy.next, que é a cabeça da lista mesclada

### Dummy Head Node

É uma técnica de implementação e não um padrão em si

- Complexidade
    - Não altera a complexidade assintótica do algoritmo.

- Ideia central
    - É um nó placeholder(marcador de posição) que você cria e coloca antes da cabeça real da sua lista(dummy.next = head). 
    - Ele não contém dados relevantes e serve apenas para simplificar a lógica do código

- Sinais de uso
    - É extremamente útil em qualquer operação que possa modificar a cabeça da lista. Isso inclui:
        - Inserir um novo nó no início
        - Remover o nó cabeça
        - Construir uma nova lista do zero (como no padrão de Mesclagem)
    - Ele garante que a lista sempre tem um nó antes do primeiro elemento real, eliminando a necessidade de tratar a cabeça como um caso especial com if (head == ...) ou if (lista_está_vazia)

- Passos
    - Crie o nó falso: dummy = new Node(0)
    - Conecte-o à lista real: dummy.next = head
    - Realize todas as suas operações de manipulação (inserção, remoção, etc) usando o dummy como o ponto de partida
    - No final, a cabeça da lista modificada (que pode ser nova ou não) estará sempre em dummy.next. Retorne dummy.next

### Reordenar/Particionar

- Complexidade
    - Temporal
        -  O(n)
            - Cada nó da lista original é visitado e processado uma única vez
    - Espacial
        - Apesar de criarmos listas temporárias, estamos apenas usando alguns ponteiros(dummy heads e tails) para religar os nós originais. Nenhum dado novo é armazenado.

- Ideia central
    - O objetivo é rearranjar os nós de uma lista em duas ou mais seções distintas com base em condição (ex: valor de um nó, índice par/ímpar), geralmente preservando a ordem relativa original dos nós dentro de cada seção

- Sinais de uso
    - O enunciado pede para 
        - particionar a lista em torno de um valor x
        - agrupar todos os nós pares e impares
        - qualquer tarefa que divida a lista em segmentos que precisam ser reagrupados no final

- Exemplo
    1. Crie duas novas listas temporárias, usando nós dummy para simplificar: antes_head e depois_head.
    2. Crie também ponteiros de cauda para cada uma: antes_tail e depois_tail
    3. Percorra a lista original nó por nó
    4. Para cada nó:
        - Se a o valor do nó for < x, anexe-o à lista "antes" (antes_tail.next = no_atual)
        - se o valor for >= x, anexe-o à lista "depois" (depois_tail.next = no_atual)
    5. Ao final, conecte as duas listas: a cauda da lista "antes" deve apontar para a cabeça da lista "depois" (antes_tail.next = depois_head.next)
    6. Importante: a cauda da lista "depois" deve apontar para null para evitar ciclos
    7. Retorne antes_head.next

## Exercícios Resolvidos

- ??? - ??? - ???

## Exercícios Propostos

- 0021 - Merge Two Sorted Lists - Easy
- 0141 - Linked List Cycle - Easy
- 0206 - Reverse Linked List - Easy
- 0876 - Middle of the Linked List - Easy
