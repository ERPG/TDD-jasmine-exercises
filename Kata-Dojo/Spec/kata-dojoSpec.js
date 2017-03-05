describe('a function that factorize that', function () {
  it('should exist', function () {
    expect(factorize).toBeDefined()
  	})
  it('should return an array', function () {
    var result = factorize()
    expect(Array.isArray(result)).toEqual(true)
  	})
  it('should return length of the function', function () {
    var result = factorize()
    var len = result.length
    expect(len).toEqual(0)
  })
  it('should return 3 length of factorize(50)', function () {
    var result = factorize(50)
    var len = result.length
    expect(len).toEqual(3)
  })
  it('should return [3, 5] when insert 15', function () {
    var result = factorize(15)
    expect(result).toEqual([3, 5])
  })
  it('should return true when factorize 20', function () {
    var result = factorize(20)
    expect(result).toBeGreaterThan([2, 2])
  })
  it('should contain 2 when factorize 10', function () {
    var result = factorize(10)
    expect(result).toContain(2)
  })
  it('should contain 2 when factorize 100', function () {
    var result = factorize(100)
    var len = result.length
    expect(len).toEqual(4)
  })
})

