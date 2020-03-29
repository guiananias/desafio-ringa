# Ringa Challenge: Question Marks

Este foi o desafio que me rendeu mais tempo. Basicamente, estava errando em alguns pontos na hora de tratar a soma dos arrays. Felizmente, consegui solucionar! :smiley:

A lógica por trás é simples, se resume a uma estrutura de map com reduce, no caso isto aqui:

```js 
const numsArray = str.split('')
  .map((letter, i) => letter.match(/\d/) ? i : -1)
  .filter(index => index !== -1)
```

E dentro de um loop soma em pares os números dentro do `numsArray`, sendo assim, ele passa por `if` que valida caso o número é **>= 10**.

Assim, ele captura todos os conjuntos de **???** e caso seja diferente disto, o retorno será um `false`, se não, por padrão é `true`.

## Como rodar

```shell
$ yarn run:question_mark # or npm run run:question_mark
```

## Materiais

- [Stack Overflow](https://pt.stackoverflow.com/)
- [Coderbyte](https://coderbyte.com/)

## Tecnologias

- Javascript (Node.js)