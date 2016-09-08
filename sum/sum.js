var numberA = parseFloat(process.argv[2]);
var numberB = parseFloat(process.argv[3]);


console.log("Numbers: " + getNumbers());

function getNumbers() {
    var numbers = [];
    for (var i=2; i<process.argv.length; i++) {
        var stringNumber = process.argv[i];
        var number = parseFloat(stringNumber);
        if (!isNaN(number)) {
            numbers.push(number);
        }
    }
    return numbers;
}





