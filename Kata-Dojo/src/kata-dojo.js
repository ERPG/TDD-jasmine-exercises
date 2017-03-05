// Factorize a positive integer number into its prime factors.

// For example:

// 	 2 -> [2]
// 	 3 -> [3]
// 	 4 -> [2,2]
// 	 6 -> [2,3]
// 	 9 -> [3,3]
// 	12 -> [2,2,3]
// 	15 -> [3,5]

function factorize (n) {
  var arr = []
  for (var i = 2; i <= n; i++) {
    while (n % i === 0) {
  	 n = n / i
      arr.push(i)
    }
  }
  return arr
}

console.log(factorize(100))
