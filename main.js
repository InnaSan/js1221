for(let i = 1; i <= 50; i++) {
    let str = ''
    if(i%3 == 0 && i%5 ==0) {
        str += 'fizzbuzz';
    } else 
    if(i%3 == 0) {
        str += 'fizz';
    } else 
    if(i%5 == 0) {
        str += 'buzz';
    } else {
        str += i;
    }

    console.log(str);
}
