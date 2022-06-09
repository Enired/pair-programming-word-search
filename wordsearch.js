//Made with Payam @Payameno

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }

  let verticalArray = [];

  for(let i = 0; i < letters[0].length; i++){
    verticalArray.push([]);
  }

  for(let i=0; i<letters.length; i++){
    for(let ii = 0; ii < letters[i].length; ii++){
      verticalArray[ii].push(letters[i][ii])
    }
  }

  const verticalJoin = verticalArray.map(ls => ls.join(''))
  for (l of verticalJoin) {
      if (l.includes(word)) return true
  }
  return false
}

module.exports = wordSearch