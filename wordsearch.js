const transpose = function(matrix) {
    // Put your solution here
    let arr = [];
  
    for (let i in matrix[0]) {
      let row = [];
      for (let j in matrix) {
        row.push(matrix[j][i]);
      }
      arr.push(row)
    }
  
    return arr;
  };

const diagTranspose = function(letters, diagArr) {
    for (let i in letters) {
        let row = [];
        for (let j in letters[0]) {
            try {
              if ((letters.slice(i))[j][j]) row.push((letters.slice(i))[j][j]);
            } catch (error) {
            //   console.log(error)
            }
            
        }
        diagArr.push(row);
    }
    return diagArr;
}

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
        //console.log(l)
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (let l of verticalJoin) {
      if(l.includes(word)) return true
    }

    let diagArr = [];

    //captures diagonals
    diagArr = diagTranspose(letters, diagArr);
    let transposeArr = transpose(letters);

    //captures remaining diagonals
    diagArr = diagTranspose(transposeArr, diagArr);

    //reverse each subarray
    let revArr = [];
    const reversedArr = letters.forEach(x => {
        revArr.push(x.reverse());
    })

    //captures diagnoals of reversed array
    revArr = diagTranspose(letters, revArr);
    transposeArr = transpose(revArr);

    //captures remaining diagonals
    revArr = diagTranspose(transposeArr, revArr)

    diagArrJoin = diagArr.map(ls => ls.join(''));
    revArrJoin = revArr.map(ls => ls.join(''));

    for (let arr of diagArrJoin) {
        if (arr.includes(word)) return true;
    }
    for (let arr of revArrJoin) {
        if (arr.includes(word)) return true;
    }

    return false;
}

const goDiagonal = arr => {
  let diag = []
  for(let a = 0; a < arr[0].length; a++){
    let diagRow = []
    let diagCount = 0;
    for (let i = a; i < arr.length; i++){
      //console.log(arr[i][diagCount])
      diagRow.push(arr[i][diagCount])
      diagCount++
    }
    diag.push(diagRow)
  }
  return diag
}

const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'OZ')

console.log(result)

module.exports = wordSearch