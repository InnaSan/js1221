let n = 0;
for (; n < 50; n++) {
    if (n % 3 == 0) {
        console.log('fizz');
    }
}
for (n = 0; n < 50; n++) {
    if (n % 5 == 0) {
        console.log(' buzz');
    }
}
for (n = 0; n < 50; n++) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log('fizzbuzz');
    }
}
for (n = 0; ; n++) {
    if (n * 3 < 50) {
        console.log(' oobuzz');
    }
}