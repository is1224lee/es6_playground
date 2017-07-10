// import { add, divide } from './math';
//
// const num1 = 5;
// const num2 = 10;
// const zero = 0;
//
// console.log(`The total of ${num1} and ${num2} is ${add(num1, num2)}`);
// console.log(`Divide by Zero result: ${divide(num1, zero)}`);

import * as math from './math';
import $ from 'jquery';

console.log('Math:', math);

const {num1, num2, zero} = math;

console.log(`The total of ${num1} and ${num2} is ${math.add(num1, num2)}`);
console.log(`Divide by Zero result: ${math.divide(num1, zero)}`);

console.log(`Multiply ${num1} and ${num2}: ${math.multiply(num1, num2)}`);

$('#root').append('<h1>I am Helping</h1>');