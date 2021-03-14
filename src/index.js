module.exports = function toReadable (number) {
    if(number == 0) return "zero";
    let units = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    if(number <= units.length) return units[number - 1];
    let secTen = ["ten", "eleven", "twelve", "thirteen", "fourteen",
                  "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    if(number > 9 && number < 20) return secTen[number - 10];
    let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    number = "" + number;
    if(number.length == 2) {
        number = Number(number);
        if(number % 10 == 0){
            return tens[(number / 10) - 2];
        }

        return tens[(Math.floor(number / 10) - 2)] + " " + units[number % 10 - 1];
  }
    if(number.length == 3) {
        number = Number(number);
        if(number % 100 == 0){
            return units[Math.floor((number / 100)) - 1] + " hundred";
        }
        if((Math.floor(number / 10)) % 10 < 2) {
            if((Math.floor(number / 10)) % 10 == 0) {
            return "" + units[Math.floor(number / 100) - 1] + " hundred "
                   + units[number - Math.floor(number / 100) * 100 - 1]; 
        }
            return "" + units[Math.floor(number / 100) - 1] + " hundred "
                   + secTen[number - Math.floor(number / 100) * 100 - 10]; 
        }
        if(number % 10 == 0) return "" + units[Math.floor(number / 100) - 1] + " hundred "
               + tens[Math.floor(number / 10) % 10 - 2];

        return "" + units[Math.floor(number / 100) - 1] + " hundred "
               + tens[Math.floor(number / 10) % 10 - 2] + " " + units[number % 10 - 1];
    }
}
