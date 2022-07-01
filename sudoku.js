

//  * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
//  * Возвращает игровое поле после попытки его решить.
//  * Договорись со своей командой, в каком формате возвращать этот результат.
//  */
function solve(boardString = bag) {
  let string = '', bag = [];

  for (i = 0; i< boardString.length; i++){
    string = string + boardString[i]
    if (string.length % 9 === 0){
      bag.push([...string])
      string = ''
    }
  }

  if(isSolved(bag)){
    return true
  }

  return false

}

// /
//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает булевое значение — решено это игровое поле или нет.
//  */

//Работаем с числом
function workSpace(bag, i, j, a, iS, iE, jS, jE){
  for (let t = 0; t < bag[i].length; t++){

    if(a == bag[i][t]){
      return false
    }

    if(a == bag[t][j]){
      return false
    }
  }

    for(let n=0; n < 3; n++){
      for(let m=0; m < 3; m++){
        if(a == bag[iS + n][jS + m]) return false
        if(a == bag[iE + n][jE + m]) return false
        
      }
    }
    if(schetchik === 81){
      return true
    }

  bag[i][j] = a
  isSolved(bag)

  return true
}

// Наша функция поиска -
function findSpace(bag, i , j, iS, iE, jS, jE){
  for (let a = 1; a < 10; a++){
    if (workSpace(bag = bag, i = i, j = j, a = a, iS = iS, iE = iE, jS = jS, jE = jE)) continue

  }
}

function isSolved(bag) {
  // console.log(bag);
  let iS = 0;
  let iE = 2;
  let jS = 0;
  let jE = 2;
  
  for (let i = 0, iii = 1; i < bag.length; i++, iii++) {
    for (let j = 0, jjj = 1; j < bag[i].length; j++, jjj++) {
      if (bag[i][j] === "-") {
        if(i < 3 && j < 3){
          
          if(jjj % 3 === 0){
            jS += 3
            jE += 3
          }

          if(iii % 3 === 0){
            iS += 3
            iE += 2;
            jS = 0
            jE = 2
          }

          findSpace(bag = bag, i = i, j = j, iS = iS, iE = iE, jS = jS, jE = jE);
        }

        findSpace(bag = bag, i = i, j = j, iS = iS, iE = iE, jS = js, jE = jE);

      }
      else continue
    }
  }

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

let num = '1-58-2----9--764-52-44--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--' ;

solve(num)


