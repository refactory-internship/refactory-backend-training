function score(a) {
    let result;
    
    if (a >= 90) {
        result = 'A';
    } else if (a >= 80 && a <= 89) {
        result = 'B';
    } else if (a >= 70 && a <= 79) {
        result = 'C';
    } else if (a >= 60 && a <= 69) {
        result = 'D';
    } else if (a <= 59) {
        result = 'E';
    }

    return console.log(result);
}

score(80);