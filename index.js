/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
// const sample = { name: '  jane  ' }
function trimProperties(obj) {
  // ✨ implement
  const newObj = {}
  const arrOfVals = Object.values(obj).map(values => values.trim())
  Object.keys(obj).forEach((k, v) => newObj[k] = arrOfVals[v])
  return newObj
}

// console.log(trimProperties(sample))


/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  // ✨ implement
  const arrOfVals = Object.values(obj).map(values => values.trim())
  Object.keys(obj).forEach((k, v) => obj[k] = arrOfVals[v])
  return obj
}

// console.log(trimPropertiesMutation(sample))

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
// const sample = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
function findLargestInteger(integers) {
  // ✨ implement
  const num = integers.reduce((a, b) => Object.values(a) > Object.values(b) ? Object.values(a) : Object.values(b))
  return num[0]
}
// console.log(findLargestInteger(sample))
// let highest = shots.reduce((a, b) => a.amount > b.amount ? a : b);

class Counter {
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
    this.count = initialNumber
  }
  countDown() {
    return this.count > 0 ? this.count -- : 0
    // ✨ implement
  }
}

const counter = new Counter(3)
console.log(counter.countDown())
console.log(counter.countDown())

// console.log(b.count)


class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed
    this.seasons  = ['summer', 'fall', 'winter','spring']
    this.currentSeason = 0
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    const currentSeason = this.seasons[this.currentSeason]
    this.currentSeason >= 3 ? this.currentSeason = 0 : ++this.currentSeason
    return currentSeason
    // let nextSeasons = this.seasons.forEach()
    // return this.seasons.push()
    // ✨ implement
  }
}
// const seasons = new Seasons()
// console.log(seasons.next())
// console.log(seasons.next())
// console.log(seasons.next())
// console.log(seasons.next())
// console.log(seasons.next())



class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.mpg = mpg
    this.name = name
    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
    /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  drive(distance) {
    // ✨ implement
    let drivableMiles = this.tank * this.mpg
    if(distance <= drivableMiles) {
      this.odometer = this.odometer + distance; 
      this.tank = this.tank - (distance/this.mpg)
      return this.odometer
    } 
    else{
    this.tank = 0
    this.odometer = this.odometer + drivableMiles
    return `ran out of gas after ${Math.round(drivableMiles)} miles`;
  }
  }
  refuel(gallons) {
    // ✨ implement
    return this.tank += gallons;
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
  return number % 2 === 0 ? true: false
}

// console.log(isEvenNumberAsync(2))
// const focus = new Car('focus', 20, 30)
// console.log(focus.drive(100)) // returns 100
// console.log(focus.drive(100)) // returns 200
// console.log(focus.drive(100)) // returns 300
// console.log(focus.drive(200)) // returns 500
// console.log(focus.drive(200)) // returns 600 (ran out of gas after 100 miles)

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
