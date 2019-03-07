// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === "Waldo") {
      var indexOfItem = arr.indexOf(element);
      found(indexOfItem);   // execute callback
    }
  })
}

function actionWhenFound(indexOfItem) {

  console.log("Found Waldo at index: " + indexOfItem);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
