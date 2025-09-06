# ARRAY

Um array é uma estrutura de dados que armazena seus elementos em um bloco de memória contíguo.
É como uma filier ade armários numerados, um ao lado do outro. 
Se sabe o endereço do primeiro armário e o tamanho de cada um, pode calcular instantaneamente a posição de qualquer outro armário.

## Análise de Complexidade
- Leitura / Acesso (por índice)
    - O(1)
        - Como a memória é contigua, o computador pode calcular o endereço exato de um elemento com uma simples fórmula matemática:
        - `endereço_do_elemento = endereço_Inicial + (índice * tamanho_de_um_elemento)`
        - É uma operação de tempo constante
- Inserção
    - No fim = O(1)
        - Geralmente é constante, mas se o array estiver cheio, ele precisa ser redimensionado, o que custa 0(n)
        - Esse processo de redimensionamento consiste em alocar um novo bloco  maior e copiar todos os elementos.
    - No início ou meio = O(n)
        - Para inserir um elemento na posição i, todos os elementos de i até o final precisam ser empurrados uma posição para a difereita para abrir espaço. No pior caso (inserir no início), move n elementos.
- Remoção
    - No fim = 0(1)
        - Ao remover o elemento i, todos os elementos à sua direita precisam ser puxados uma posição para a esquerda para fechar o buraco.
    - No início ou meio = O(n)
        - Ao remover o elemento i, todos os elementos à sua direita precisam ser puxados uma posição para a esquerda para fechar o buraco.

## Padrões de Resolução de Problemas
### Two Pointers
É uma das técnicas mais eficientes e comuns para problemas que envolvem pares ou subarrays em um array.

- Complexidade:
    - Espacial
        - O(n)
            - Cada ponteiro atravessa o array (ou parte dele) apenas uma vez. É uma otimização massiva sobre a abordagem de força bruta com loops aninhados, que seria O(n^2)

- Ideia central:
    - É o uso de dois ponteiros (variáveis que guardam índices) que se movem pelo array de forma coordenada para resolver um problema. Os ponteiros podem:
        - se mover um em direção ao outro
        - na mesma direção com velocidades diferentes
        - começar juntos e se afastar.

- Principal sinal para uso do padrão:
    - Problemas que envolvem encontrar:
        - um par
        - um trio
        - um subarray
    - que satisfaça uma condição.
    - Especialmente em um array ordenado.
    - Exemplos:
        - Encontre dois números que somam X
        - Verifique se a String é um palíndromo
        - Encontre o container com mais água

- Exemplo:
    - Dado um array ordenado e um valor X, encontre um par de números no array que some exatamente X
        1. Crie um ponteiro esquerda no início do array (índice 0)
        2. Crie um ponteiro direita no final do array (índice n-1)
        3. Enquanto esquerda < direita:
            - Some array[esquerda] + array[direita]
            - Se a soma for menor que X, você precisa de números maiores: incremente esquerda
            - Se a soma for maior que X, você precisa de números menores: decremente direita
            - Se a soma for igual a X, você encontrou o par!

### Binary Search

- Complexidade:
    - Temporal:
        - O(log n)
            - A cada passo, o tamanho do problema é dividido pela metade, tornando-a extremamente eficiente para grandes volumes de dados

- Ideia central:
    - é a técnica de "dividir para conquistar" aplicada a um espaço de busca ordenado. A cada passo, você elimina metade das possibilidades restantes, adivinhando a resposta no meio do espaço e ajustando os limites da busca com base nesse palpite

- Pré-requisito obrigatório:
    - O array (ou espaço de busca) deve estar ORDENADO. Use quando o problema pedir para:
        - encontrar um elemento específico
        - encontrar a primeira/última ocorrência de um valor
        - problemas onde você pode adivinhar uma resposta e verificar se ela é muito alta ou muito baixa

- Exemplo:
    - Encontre o índice de um número X em array ordenado
        1. Defina os limites da busca: esquerda = 0, direita = n-1
        2. Enquanto esquerda <= direita:
            - Calcule o meio: meio = esquerda + (direita - esquerda) // 2
            - Se array[meio] for igual a X, você encontrou!
            - Se array[meio] for menor que X, o alvo só pode estar na metade direita: esquerda = meio + 1
            - Se array[meio] for maior que X, o alvo só pode estar na metade esquerda: direita = meio - 1
        3. Se array[meio] for maior que X, o alvo só pode estar na metade esquerda: direita = meio - 1

### Sliding Window
Técnica muito útil para problemas que envolvem subarrays contíguos.

- Complexidade:
    - Temporal:
        - O(n)
            - Cada elemento do array é adicionado e removido da janela extamente uma vez. É uma grande otimização sobre a força bruta, que seria O(n*k)

- Ideia central:
    - É a criação de uma janela (um subarray contíguo) que desliza sobre o array principal. A janela se expande pela direita (adicionando novos elementos) e se contrai pela esquerda (removendo elementos antigos) para manter alguma propriedade ou encontrar uma solução ótima.

- Sinais para uso:
    - Problemas que pedem para encontrar o melhor:
        - máximo
        - mínimo
        - mais longo
        - mais curto
    - subarray contíguo que satisfaça uma condição.
    - Exemplos:
        - soma máxima de um subarray de tamanho K
        - menor subarray cuja soma é pelo menos X
        - substring mais longa com no máximo K caracteres distintos

- Exemplo:
    - Encontre a soma máxima de qualquer subarray contíguo de tamanho k
        1. Calcule a soma dos primeiros k elementos. Essa é sua soma_atual e sua soma_maxima
        2. Comece um loop do k-ésimo elemento até o final do array
        3. Em cada passo, "deslize" a janela:
            - adicione o novo elemento (array[i]) à soma_atual
            - subtraia o elemento que ficou para trás (array[i-k])
        4. Atualize a soma_maxima se a soma_atual for maior.

### Busca Exponencial
Uma variação ineressante que combina ideias para lidar com arrays giagntes ou de tamanho desconhecido

- Complexidade:
    - Temporal:
        - O(log n)
            - A primeira fase (encontrar o range) leva O(log k) onde k é a posição do elemento. A segunda fase (Busca Binária) também leva O(log k). O resultado final é dominado pelo logaritmo da posição do elemento, sendo extremamente eficiente.

- Ideia Central:
    - É uma técnica usada para buscar em arrays ordenados gigantescos ou de tamanho desconhecido/infinito.
    - Ela funciona em duas fases:
        - Encontrar o Range
            - Primeiro, ela encontra um range (um bloco) onde o elemento alvo provavelmente está, aumentando o índice exponencialmente (1, 2, 4, 8, 16, ...)
        - Busca Binária
            - Depois de encontrar esse range, ela executa uma Busca Binária apenas dentro dele

- Passos:
    1. Verifique se o alvo está no índice 0
    2. Comece com um índice i = 1
    3. Enquanto i for menor que o tamanho do array e array[i] for menor ou igual ao alvo, dobre o índice: i = i*2
    4. Agora você sabe que o alvo, se existir, está entre os índices i/2 e i
    5. Execute uma Busca Binária no array, mas apenas dentro desse range (i/2 até min(i, n-1))

### Somas de Prefixo (Prefix Sum)
É uma técnica de pré-computação que acelera drasticamente certas perguntas.

- Complexidade:
    - Temporal:
        - O(n)
            - para criar o array de prefixo (uma única passagem)
        - O(1)
            - cada consulta de soma de intervalo leva tempo constante

- Ideia central
    - É a criação de um array auxiliar (o array de prefixo) onde cada posição i contém a soma de todos os elementos do array original, do início até a posição i
        - prefixo[i] = original[0] + original[1] + ... + original[i]

- Sinal de uso:
    - O problema pede a soma de um subarray [i, j] várias vezes. Sem essa técnica, cada cálculo de soma levaria O(n). Com ela, se torna uma operaçãod e tempo constante.

- Exemplo:
    - Como calcular a soma do subarray [i,j] usando um array de prefixo?
        - É uma simples subtração:
            - soma(i, j) = prefixo[j] - prefixo[i-1]
            - é preciso um cuidado especial quando i é 0
        - Exemplo:
            - original = [1, 2, 3, 4, 5], prefixo = [1,3,6,10,15]
                - soma de [2,4] é 5 + 4 + 3 = 12
                - usando o prefixo: prefixo[4] - prefixo[1] = 15 - 3 = 12
                - se fosse de [0,4], teria que colocar uma condicional para que não tentasse acessar o prefixo[-1], ou seja, não seria necessário a subtração, só pegar o valor do prefixo[4]

### Contagem com Hash Map (Frequency Counting)
Técnica que troca espaço por tempo

- Complexidade:
    - Temporal:
        - O(n)
            - percorre o array uma vez
    - Espacial:
        - O(n)
            - se todos os elementos forem únicos, o hash map tem o tamanho do array

- Ideia central:
    - Usar uma estrutura de dados Hash Map para armazenar as frequências(contagens) dos elementos em um array. 
    - A chave do mapa é o elemento do array, e o valor é quantas vezes ele aparece

- Sinais de uso:
    - Qualquer problema que envolva:
        - frequências
        - duplicatas
        - anagramas
        - encontrar pares que satisfaçam uma condição
    - Se a pergunta contém palavras como:
        - contar
        - distintos
        - único
        - duplicado
        - anagrama

- Exemplo:
    - Dado um array e um alvo X, encontre um par que some X.
        1. Crie um Hash Map
        2. Percorra o array. Para cada número num:
        3. Calcule o complemento: complemento = X - num
        4. Verifique se o complemento já existe como chave no mapa.
            - Se sim, você encontrou o par!
            - Se não, adicione o num atual e seu índice ao mapa

### Algoritmo de Kadane
É um algoritmo específico e uma ótima introdução ao conceito de Programação Dinâmica.

Ele resolve o problema da soma máxima de um subarray contíguo em um array que pode conter números negativos.

- Complexidade:
    - Temporal:
        - O(n)
            - percorre o array inteiro
    - Espacial:
        - O(1)
            - usa apenas duas variáveis, independentemente do tamanho da entrada

- Passos:
    - Ele percorre o array mantendo duas variáveis:
        - soma_maxima_atual
            - A soma máxima do subarray que termina na posição atual.
            - A cada passo, ela é o maior valor entre (soma_maxima_atual + elemento_atual) e o próprio elemento_atual.
                - Isso reseta a contagem se a soma anterior se tornar negativa
        - soma_maxima_global
            - a maior soma_maxima_atual encontrada até agora

### Ordenação Cíclica (Cyclic Sort)

- Complexidade:
    - Temporal:
        - O(n)
            - Cada número é trocado no máximo uma vez para chegar à sua posição final.
    - Espacial:
        - O(1)
            - A ordenação ocorre no próprio array, sem uso de array auxiliar

- Ideia central:
    - É uma técnica de ordenação in-place (sem usar memória extra) que funciona para arrays onde os números estão em um intervalo contínuo e específico.
        - por exemplo, de 1 a N, ou de 0 a N-1
    - A ideia é colocar cada número x em seu índice correto (que seria x-1 ou x)

- Sinais de uso:
    - o enunciado diz que o array contém número em um intervalo específico e pede para encontrar:
        - números faltando
        - números duplicados
        - erros na sequência

- Exemplo:
    - Dado um array com N números distintos no intervao [0,N], encontre o número que está faltando.
        - Use a lógica do Cyclic Sort para tentar colocar cada número num no seu índice num
        - Percorra o array.
            - O primeiro índice i onde array[i] != i é o número que estava faltando.

## Exercícios Resolvidos

- 0001 - Two Sum - Easy
- 0219 - Contains Duplicate - Easy
    - Recomendações:
        - 0220 - Contains Duplicate III - Hard
- 0387 - First Unique Character in a String - Easy
    - Recomendações:
        - 0451 - Sort Characters By Frequency - Medium
        
- 0557 - Reverse Words in a String III - Easy
- 3090 - Maximum Length Substring with Two Occurrences - Easy
    - Recomendações:
        - 1160 - Find Words That Can Be Formed by Characters - Easy
        - 1758 - Minimum Changes To Make Alternating Binary String - Easy
        - 2516 - Take K of Each Character From Left and Right - Medium
- 0217 - Contains Duplicate - Easy
    - veio do 0219
- 2351 - First Letter to Appear Twice - Easy
    - veio do 0387
- 0541 - Reverse String II - Easy
    - veio do 0557

## Exercícios Propostos


