// Task: Write a JavaScript program that tallies the number of each possible outcome from rolling a die n times. n must be a number entered by the user.

let number = Number(prompt("Enter a number"));
console.log(number);

let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;

console.log('ones\ttwos\tthrees\tfours\tfives\tsixes');

// Et for-loop som kører så mange gange, som det antal der bliver tastet i prompten
for (let roll = 0; roll < number; roll++) {

    // Angiver et tilfældigt helt tal mellem 1 og 6
    let n = Math.random();
    n = Math.floor(n*6+1);

    // if-statement, hvor 1 lægges til variablen, som har den samme værdi, som det tilfældige tal mellem 1 og 6 der fås fra koden ovenfor  
    if (n === 1) {
        ones++
    } else if (n === 2) {
        twos++
    } else if (n === 3) {
        threes++
    } else if (n === 4) {
        fours++
    } else if (n === 5) {
        fives++
    } else if (n === 6) {
        sixes++
    }

}
// Her console.logges værdierne af de angivne variabler
console.log(`${ones}` + '\t' + '\t' + `${twos}` + '\t' + '\t' + `${threes}` + '\t' + '\t' + `${fours}` + '\t' + '\t' + `${fives}` + '\t' + '\t' + `${sixes}`);







