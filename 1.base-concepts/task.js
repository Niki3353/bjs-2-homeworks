"use strict"
//Задание 1

function solveEquation(a,b,c){
    let x1, x2, d, x;
    d = Math.pow(b,2) - 4*a*c;
    console.log("Дискриминант равен: " + d)
    
    if(d < 0) console.log("Корней нет. Массив пустой.")
    if(d == 0){
        x1 = -b/(2*a);
        console.log("Значение корня равно: " + x)
    }
    if(d > 0){
        x1 = (-b + Math.sqrt(d) )/(2*a);
        x2 = (-b - Math.sqrt(d) )/(2*a);
        console.log("Значение первого корня: " + x1 + "; " + "\n" + "Значение второго корня: " + x2 + ".")
    }
}
solveEquation(1, 2, 10);


//Задание 2

function calculateTotalMortgage(percent, contribution, amount, countMonths){
    let credit, pay;
    
    credit = amount - contribution;
    console.log("Сумма, которую нужно вернуть банку с учетом первоначального взноса равна: " + credit);

    pay = credit * (percent + (percent/((Math.pow(1 + percent), countMonths)-1)));
    console.log("Сумма оплаты креита равна: " + pay)
}

calculateTotalMortgage(10, 1000, 50000, 12);