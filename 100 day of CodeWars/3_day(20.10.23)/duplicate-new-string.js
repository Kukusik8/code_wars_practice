// The goal of this exercise is to convert a string to a
// new string where each character in the new string
// is "(" if that character appears only once in the
//  original string, or ")" if that character appears more than once
//     in the original string.Ignore capitalization
// when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// не повторился - "("
// повторилсяс - ")"

// IndexOf вернет первое встречаемость значения
// lastIndexOf вернет последнее встречаемость значения.
//то есть он сравнивает их позицию если две эти функции равны при проверке на одной и той же позиции, true

function duplicateEncode(word) {
  var unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

  function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
