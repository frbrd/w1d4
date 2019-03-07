var words = ["ground", "control", "to", "major", "tom"];


var map = function(arr, fct){
  var newArr = [];
  arr.forEach(function(item){
  newArr.push(fct(item));
  });
  console.log(newArr);
 }

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
