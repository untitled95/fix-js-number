/**
 * @author untitled95
 * @class Calculation
 */
export const Greeter = (name: string) => `Hello ${name}`;

export const Greeter2 = (name: string) => `Hi ${name}`;


// Add two numbers
export const add = (number1: number, number2: number): number => {

    const num1 = Number(number1);
    const num2 = Number(number2);

    const result  = Number((num1+num2).toPrecision(2));
    return result;
}


// private const doubleCheck = (number1: number, number2: number, result: number, type: string): number => {
//     let originalResult: number = 0;
//     switch (type) {
//         case "add":
//             originalResult = number1 + number2;
//             break;
//         case "subtract":
//             originalResult = number1 - number2;
//             break;
//         case "multiple":
//             originalResult = number1 * number2;
//             break;
//         case "devid
//         "

//     }


//     if (Math.abs(result - originalResult) > 1) {
//         return originalResult;
//     }
// }
