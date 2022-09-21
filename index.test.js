const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {})
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  utils.trimProperties(input)
  expect(input).toEqual(input)
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const secondInput = { name: '  jane  '}
    const secondExpected = { name:'jane'}
    const actualResult = utils.trimPropertiesMutation(secondInput)
    expect(actualResult).toEqual(secondExpected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const thirdInput = {test: ' testing '}
    const actualResult = utils.trimPropertiesMutation(thirdInput)
    expect(actualResult).toEqual(thirdInput)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    expect(utils.findLargestInteger(input)).toEqual(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.count).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    // let second = counter.countDown()
    expect(counter.countDown()).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toBe(0) 
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for(let i = 1; i < 40; i++){
      seasons.next()
    }
    expect(seasons.next()).toBe('spring')
  })
})


describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toBe(100)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(100)
    expect(Math.round(focus.tank)).toBe(17)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(100)
    focus.refuel(10)
    expect(Math.round(focus.tank)).toBe(27)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.refuel(10)).toBe(30)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    expect(utils.isEvenNumberAsync(2)).toBe(true)
  })
  test('[20] resolves false if passed an odd number', () => {
    expect(utils.isEvenNumberAsync(1)).toBe(false)
  })
})
