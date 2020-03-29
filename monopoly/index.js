function default_move(piece, prison_try, money) {
  const structuralResponse = {
    player: piece,
    arrested: prison_try,
    money,
    moved: 0
  }

  function rollDice() {
    const stDice = Math.floor((Math.random() * 6) + 1);
    const ndDice = Math.floor((Math.random() * 6) + 1);

    console.log(`You rolled ${stDice} and ${ndDice}`);

    return [stDice, ndDice]
  }

  if (prison_try) {
    let data = {};

    for (let i = 0; i < 3; i++) {
      const dices = rollDice();

      if (dices.every(dice => dice === dices[0])) {
        return { 
          player: piece, 
          money, 
          arrested: false, 
          moved: dices[0] + dices[1] 
        };
      }
      
      data = { 
        ...structuralResponse, 
        money: money - 50, 
        moved: dices[0] + dices[1],
      };
    }

    return data;
  }

  const dices = rollDice();

  if (dices.every(dice => dice === dices[0])) {
    const logDices = []

    for (let i = 0; i < 2; i++) {
      logDices.push(...rollDice())

      if (histDices.every(dice => dice === dices[0])) {
        return { 
          player: piece, 
          money, 
          arrested: true, 
          moved: dices[0] + dices[1] 
        };
      }
    }
  }

  return {
    ...structuralResponse,
    moved: dices[0] + dices[1],
    arrested: false,
    money,
  }
}

console.log(default_move("Vermelho", false, 500));