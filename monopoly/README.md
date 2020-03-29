# Ringa Challenge: Monopoly

**Não foi utilizado nenhum material de pesquisa neste projeto.**

Este foi o mais simples deles, basicamente era uma estrutura de `if` encadeada com
um `for`. A estrutura do projeto é:

- `default_move(piece, prison_try, money)`
  - `rollDice()` -> Função responsável por gerar os números aleatórios do dado;
  - `if(prison_try)` -> um if para caso o parâmetro prison_try seja verdadeiro, o escopo da função ser este;
    - `for(let i = 0; i < 3)` -> Responsável por rolar os dados 3 vezes e retornar o resultado final;
  - `if` -> Este if é para caso você não esteja na tentatica de sair da prisão e acabou rolando um *double*;
    - `for(let i = 0; i < 2)` -> Caso você tenha rolado o *double*, você cairá neste for, que é responsável por aplicar o resultado final e ver se irá para a prisão ou não.

## Como rodar

```shell
$ yarn run:monopoly # or npm run run:monopoly
```

## Tecnologias

- JavaScript (Node.js)