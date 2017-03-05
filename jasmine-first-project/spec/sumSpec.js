describe('a function sum that', function () {
  it('should exist', function () {
    expect(sum).toBeDefined()
  })

  it('should return', function () {
    var result = sum(2, 4)
    expect(typeof result).toEqual('number')
  })

  it('should return 5 when sum(2,3)', function () {
    var result = sum(2, 3)
    expect(result).toEqual(5)
  })
  it('should return 10 when sum(7,3)', function () {
    var result = sum(7, 3)
    expect(result).toEqual(10)
  })
  it('should return 10 when sum("7",3)', function () {
    var result = sum('7', 3)
    expect(result).toEqual(10)
  })
  it('should return 10 when sum("7",3)', function () {
    var result = sum('7', '3')
    expect(result).toEqual(10)
  })
})

