describe('a function fizzBuzz that', function () {
  it('should exist', function () {
    expect(fizzBuzz).toBeDefined()
  })
  it('should return an array', function () {
    var result = fizzBuzz()
    expect(Array.isArray(result)).toEqual(true)
  })
  it('should return the numbers from 1 to 100', function () {
    var result = fizzBuzz()
    var len = result.length
    expect(len).toEqual(100)
  })
  it('should return Fizz when number%3 is 0', function () {
    var result = fizzBuzz()
    expect(result[2]).toEqual('Fizz')
  })
  it('should return Buzz when number%5 is 0', function () {
    var result = fizzBuzz()
    expect(result[4]).toEqual('Buzz')
  })
  it('should return Fizz when number contains 3', function () {
    var result = fizzBuzz()
    expect(result[35]).toEqual('Fizz')
  })
  it('should return Buzz when number contains 5', function () {
    var result = fizzBuzz()
    expect(result[55]).toEqual('Buzz')
  })
})
