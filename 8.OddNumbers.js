let x = parseInt(prompt('Enter a first integer: '));
let y = parseInt(prompt('Enter a second integer: '));



for (var i=x; i<=y; i++) {
    if (i === 0) {
            console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is odd");
    }
}