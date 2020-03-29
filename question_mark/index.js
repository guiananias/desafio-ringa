function questions_marks(str) {
  const numsArray = str.split('')
    .map((letter, i) => letter.match(/\d/) ? i : -1)
    .filter(index => index !== -1)

	let flag = false;

	for (let i = 0; i < numsArray.length - 1; i++) {
    const sum =
      parseInt(str[numsArray[i]], 10) + parseInt(str[numsArray[i + 1]], 10);

		if (sum >= 10) {
      flag = true;

      let strSeg = str
        .slice(numsArray[i], numsArray[i + 1])
        .replace(/[^\?]/g, '');

      console.log(strSeg)

      strSeg !== '???' ? flag = false : flag;
		}
  }
  
  console.log(flag);
}

questions_marks("arrb6???4xxbl5???eee5");
