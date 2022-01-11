function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    let str = '';
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        str += 'fizzbuzz';
      } else {
        str += 'fizz';
      }
    } else if (i % 5 === 0) {
      str += 'buzz';
    } else {
      str += i;
    }
    console.log(str);
  }
}

fizzBuzz(50);
