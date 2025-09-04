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

## Exercícios Resolvidos

- ??? - ??? - ???

## Exercícios Propostos