// function getArrayParams(...arr) {

//   return { min: min, max: max, avg: avg };
// }

// function summElementsWorker(...arr) {

// }

// function differenceMaxMinWorker(...arr) {

// }

// function differenceEvenOddWorker(...arr) {

// }

// function averageEvenElementsWorker(...arr) {

// }

// function makeWork (arrOfArr, func) {

// }

//Задание 1
function getArrayParams(...arr){
  let minimum = 0, 
  maximum = 0, 
  amount = 0, 
  avg = 0;

  for(let i = 0; i < arr.length; i++){
      minimum = Math.min.apply(null, arr)
  }  
  
  for(let i = 0; i < arr.length; i++){
      maximum = Math.max.apply(null, arr)
  }
  
  for(let i = 0; i < arr.length; i++){
      amount += arr[i];
  }

  avg = amount / arr.length;
  return { min: minimum, max: maximum, avg: +avg.toFixed(2) } ;
}
console.log(getArrayParams(-99, 99, 10));




//Задание 2
//Сумма вводимых элементов
function summElementsWorker(...argum){
  let summ = 0;

  for(let i = 0; i < argum.length; i++){
    if(argum == 0){
      return 0;
    }
  }

  for(let i = 0; i < argum.length; i++){
      summ += argum[i];
  }
  return summ;
}

// //Максимум и минимум
function differenceMaxMinWorker(...argum){
  let newEmptyArr = [];
  let maximum = 0,
  minimum = 0,
  diffMaxMin = 0;

  //Проверка на пустой массив 
  for(let i = 0; i < argum.length; i++){
    if(argum == 0){
      return 0;
    }
  }
  
  //Максимум
  for(let i = 0; i < argum.length; i++){
      maximum = +Math.max.apply(null,argum);
  }
  
  //Минимум
  for(let i = 0; i < argum.length; i++){
      minimum = +Math.min.apply(null,argum);
  }
  
  diffMaxMin = maximum - minimum;
  newEmptyArr.push(diffMaxMin);
  newEmptyArr.join(",")
  return parseInt(newEmptyArr);;
}

//Разница суммы четных и нечетных элементов
function differenceEvenOddWorker(...argum){
  let sumEvenElement = 0,
  sumOddElement = 0,
  difference = 0;

  for(let i = 0; i < argum.length; i++){
    if(argum[i] == 0){
      return average;
    }
  }
  
  for(let i = 0; i < argum.length; i++){
      if(argum[i] % 2 == 0){
          sumEvenElement += argum[i];
      }
      else{
          sumOddElement += argum[i];
      }
  }
  difference = sumEvenElement - sumOddElement;
 return difference;
}


//Среднее значение четных элементов
function averageEvenElementsWorker(...argum){
  let sumEvenElement = 0,
  countEvenElement = 0,
  average = 0;

  for(let i = 0; i < argum.length; i++){
    if(argum[i] == 0){
      return average;
    }
  }
  
  for(let i = 0; i < argum.length; i++){
      if(argum[i] % 2 == 0){
          sumEvenElement += argum[i];
          countEvenElement++;
      }
      average = sumEvenElement / countEvenElement; 
  }
  return average;
}
console.log(summElementsWorker(10, 10, 11, 20, 10))
console.log(differenceMaxMinWorker(0, 0, 0, -1, -100))
console.log(differenceEvenOddWorker(72, 75, 51, 87, 43))
console.log(averageEvenElementsWorker(30, 41, 55, 96, 62))



//Задание 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let secondSeparation = {...arrOfArr};
  let resultOfFunc = 0;
  for(let i = 0; i < arrOfArr.length; i++){
    resultOfFunc = func(secondSeparation[i]);
    if(resultOfFunc > maxWorkerResult){
      (maxWorkerResult = resultOfFunc).toFixed(2);
    }
  }
  console.log(maxWorkerResult)
}
