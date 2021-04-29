let x = parseInt(prompt('Enter First Integer: '));
let y = parseInt(prompt('Enter Second Integer: '));


console.log("These Numbers are not divisible by 3 ");
for (var i=x; i<=y; i++) {
    
    if (i % 3 === 0) {
            console.log();   
    }
    else {
        console.log(i);
    }
    
}