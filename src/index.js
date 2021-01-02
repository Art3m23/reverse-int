module.exports = function reverse (n) {
  let str=String(Math.abs(n))
  str=str.split('').reverse().join('')
  return Number(str)
}
