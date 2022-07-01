

//  * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
//  * Возвращает игровое поле после попытки его решить.
//  * Договорись со своей командой, в каком формате возвращать этот результат.
//  */
function solve(boardString) {
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
function workSpace(board){
  

  for (let t = 0; t < bag[i]; t++){

    if(a === bag[i][t]){
      return false
    }

    if(a === bag[t][j]){
      return false
    }

    if(bag[i][j]){
      
    }

  }
    bag[i][j])
  if (a === )
}

// Наша функция поиска -
function findSpace(board){
  for (let a = 1; a < 10; a++){
    if (workSpace(a)) continue

  }
}

function isSolved(board) {

  console.log(bag);
  findWord(bag)
  for (let i = 0; i < bag.length; i++) {
    for (let j = 0; j < bag[i].length; j++) {
      if (bag[i][j] === "-") {
        return bag[i][j];
      }
      return null;
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



