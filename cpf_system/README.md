# Ringa Challenge: CPF System

Seguindo com base na orientação dada. O projeto foi feita utilizando **TypeScript**, numa estrutura de classes. Sendo basicamente estruturado desta forma:

- Construtor da Classe
  - Loop de Validação
    - Validar primeiro número
    - Validar segundo número
  - Método de análise do CPF

## Como rodar o Script

```shell
$ yarn run:cpf # or npm run run:cpf
```

### Como adicionar meu CPF

É muito simples, basta:

```javascript
new CPFValidator("12345678909")

// or

new CPFValidator("123.456.789-09")
```

## Resources

- [Como Validar CPF - DevMedia](https://www.devmedia.com.br/validar-cpf-com-javascript/23916)

## Built With

- [TypeScript](https://www.typescriptlang.org/)