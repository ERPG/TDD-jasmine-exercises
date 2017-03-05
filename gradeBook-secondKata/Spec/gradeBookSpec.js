describe('a function average that', function () {
  it('should exist', function () {
    expect(average).toBeDefined()
  })

  it('should return a string', function () {
    var result = average(20, 30, 40)
    expect(typeof result).toEqual('string')
  })
  it('should return the grade F when 0 <= arg < 60', function () {
    var result = average(50, 50, 50)
    expect(result).toEqual('F')
  })
  it('should return the grade D when 60 <= arg < 70', function () {
    var result = average(65, 65, 65)
    expect(result).toEqual('D')
  })
  it('should return the grade C when 70 <= arg < 80', function () {
    var result = average(75, 73, 79)
    expect(result).toEqual('C')
  })
  it('should return the grade B when 80 <= arg < 90', function () {
    var result = average(81, 83, 89)
    expect(result).toEqual('B')
  })
  it('should return the grade A when 90 <= arg <= 100', function () {
    var result = average(91, 93, 99)
    expect(result).toEqual('A')
  })
})
