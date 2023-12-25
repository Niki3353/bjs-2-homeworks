//Задание 1
function getArrayParams(...arr){
  let minimum = 0, 
  maximum = 0, 
  amount = 0, 
  avg = 0;

  minimum = Math.min(...arr)
  maximum = Math.max(...arr)
  
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
      summ += argum[i];
  }
  return summ;
}

// //Максимум и минимум
function differenceMaxMinWorker(...argum){
  if(argum.length === 0) return 0;
  let maximum = 0,
  minimum = 0;
  
  maximum = Math.max(...argum) 
  minimum = Math.min(...argum)
  
  return maximum - minimum;
}

//Разница суммы четных и нечетных элементов
function differenceEvenOddWorker(...argum){
  let sumEvenElement = 0,
  sumOddElement = 0,
  difference = 0;
  
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
      if(argum[i] % 2 == 0){
          sumEvenElement += argum[i];
          countEvenElement++;
      }
      average = sumEvenElement / countEvenElement; 
  }
  return average;
}
console.log(summElementsWorker())
console.log(differenceMaxMinWorker())
console.log(differenceEvenOddWorker())
console.log(averageEvenElementsWorker())



//Задание 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let resultOfFunc = 0;
  for(let i = 0; i < arrOfArr.length; i++){
    resultOfFunc = func(...arrOfArr[i]);
    if(resultOfFunc > maxWorkerResult){
      maxWorkerResult = resultOfFunc;
    }
  }
  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker));












