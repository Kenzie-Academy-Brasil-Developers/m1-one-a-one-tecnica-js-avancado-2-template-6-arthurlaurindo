# Simulado de entrevista técnica

Desenvolva uma função chamada verificaMultiplosDeTres() que recebe dois parâmetros:

-   O primeiro deve ser uma lista de números.
-   O segundo um número.

Sua função deve contar quantas vezes o **número passado por parâmetro** aparece dentro da **lista passada por parâmetro**.

Caso a quantidade de vezes que o **número** aparece dentro da lista seja multiplo de três, deve retornar a seguinte string:

```javascript
"A quantidade de vezes que o valor aparece é multiplo de três";
```

Caso não seja deve retornar:

```javascript
"A quantidade de vezes que o valor aparece não é multiplo de três";
```

Exemplo:

```javascript
const lista = [1, 5, 3, 4, 7, 4, 15, 20, 4];
verificaMultiplosDeTres(lista, 4);
// A função deve retornar:
//"A quantidade de vezes que o valor aparece é multiplo de três"
// Pois o número 4 se repete 3 vezes e 3 é um número multiplo de 3.
```

Similarmente,

```javascript
const lista = [1, 1, 2, 1, 1];
verificaMultiplosDeTres(lista, 1);
// A função deve retornar:
//"A quantidade de vezes que o valor aparece não é multiplo de três"
// Pois o número 1 se repete 4 vezes e 4 não é um número multiplo de três.
```
