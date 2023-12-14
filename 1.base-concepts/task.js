"use strict"
//Задание 1

function solveEquation(a,b,c){
    let result = [];
    let d = Math.pow(b,2) - 4*a*c;
    console.log("Дискриминант равен: " + d)
    
    if(d < 0){ 
        console.log("Корней нет. Массив пустой.")
        return result;
    }
    if(d == 0){
        let x1 = -b/(2*a);
        result.push(x1);
        return result;
    }
    if(d > 0){
        let x1 = (-b + Math.sqrt(d) )/(2*a);
        let x2 = (-b - Math.sqrt(d) )/(2*a);
        result.push(x1);
        result.push(x2);
        return result;
    }
}
// let num = Number(solveEquation(2, -5, 3));
console.log(solveEquation(2, -5, 3));




//Задание 2

function calculateTotalMortgage(percent, contribution, amount, countMonths){
    

    percent = percent / 100; 
    let monthlyPayment  = percent / 12; 
    let credit = amount - contribution; 
    let payment = credit * (monthlyPayment + (monthlyPayment / (Math.pow((1 + monthlyPayment), countMonths) - 1))); 
    let totalAmount = payment * countMonths; 
    
    return +totalAmount.toFixed(2);

}
let result = calculateTotalMortgage(15, 0, 10000, 36);
console.log(result);








