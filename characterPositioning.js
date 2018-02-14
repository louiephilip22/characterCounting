function countLetter(original) {
  var copy = original.replace(/\s/g,'').split("");
  var countLet = [];

  for (var i = 0; i < copy.length; i++) {
    if (copy[i] in countLet) {
      countLet[copy[i]].push(i);
    } else {
      countLet[copy[i]] = [i];
    }
  }
  return countLet;
}

console.log(countLetter("lighthouse in the house"));
