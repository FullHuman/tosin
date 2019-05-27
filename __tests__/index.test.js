import { sum } from './../src/index'

describe('test the library', () => {
  it('returns the expected result', () => {
    const actual = sum(1, 2)
    const expected = 3
    expect(actual).toBe(expected)
  })
})