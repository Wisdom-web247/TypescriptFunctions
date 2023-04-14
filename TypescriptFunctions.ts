

//Convert pounds to kilograms
function convertToKg(pounds: number): string {

    let kilograms: number = pounds * 0.453592
    return (pounds + 'lb is equivalent to ' + kilograms + 'kg')
}
console.log(convertToKg(600))

//Convert inches to Centimeters
function convertToCm(inches: number): string {

    let centimeter: number = inches * 2.54
    return (inches + 'inches is equivalent to ' + centimeter + 'cm' )
}
console.log(convertToCm(10))

//Convert fahrenheit to Celsius
function convertToCel(fahrenheit: number): string {
    
    let celsius: number = (fahrenheit - 32) * 5/9
    return (fahrenheit + '°F is equivalent to ' + celsius + '°C')
}
console.log(convertToCel(79))

//Convert feet to Meters
//Return type of the overall function should be a string if there is a number in the function as well
function convertToMeter(feet: number): string {

    let meters: number = feet * 0.3048 
    return (feet + 'feet is equivalent to ' + meters + 'meters')
}
console.log(convertToMeter(56))

//Function to check if the input number is Odd or even
function isOddOrEven(input: number): string {

    let statement: string 
    
    //Use modulus % in the if statements to check
    if (input % 2 == 0) {
        statement = "The number is even"

    } else {
        statement = "The number is odd"
    }
    return statement
}
console.log(isOddOrEven(2))

//Function to check if number is Fizz or Buzz
function fizzBuzz(input: number): number | string {

    /*  1. if statement to check if the input is divisible by 3 or 5
        2. Order of how your code is written is important
    */
    if (input % 3 == 0 && input % 5 == 0) {
        return "Fizz-Buzz!"
    } else if (input % 5 == 0) {
       return "Buzz!"
    } else if (input % 3 == 0) {
        return  "`fizz!"
    } else {
        return input
    }
}
console.log(fizzBuzz(30))