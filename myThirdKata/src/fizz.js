
function fizzBuzz () {
  var resultArray = []
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 || /3/.test(i)) {
      resultArray.push('Fizz')
    } else if (i % 5 === 0 || /5/.test(i)) {
      resultArray.push('Buzz')
    } else {
      resultArray.push(i)
    }
  }
  return resultArray
}
