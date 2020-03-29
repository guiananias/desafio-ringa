class CPFValidator {
  private cpf: number[];
  
  constructor(private input?: string) {
    this.cpf = input
      .match(/\d/g)
      .slice(0, 9)
      .map(i => Number(i));
    
    this.calculate();
    this.sendingResult();
  }
  
  private verifyValidator(counter: number) {
    let count = counter;

    const sumCPF = this.cpf
    .map(num => {
      const res = num * count;
      --count;
      
      return res;
    })
    .reduce((total, currentValue) => total + currentValue, 0);
    
    
    const result = (sumCPF * 10) % 11;
    
    if (result === 10 || result === 11) {
      this.cpf.push(0);
    } else {
      this.cpf.push(result);
    }
  }

  private calculate() {
    for (let i = 0; i < 2; i++) {
      let count = 10 + i;

      this.verifyValidator(count);
    }
  }

  private sendingResult() {
    const inputCPF= this.input.match(/\d/g).join("");
    const replacedStr = this.cpf.join("")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    console.log(
      `O CPF (${replacedStr}) é ${this.cpf.join("") === inputCPF ? 'válido' : 'inválido'}!`
    )
  }
}

new CPFValidator("123.456.789-09");
