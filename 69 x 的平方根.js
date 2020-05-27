// 直接使用Math提供的方法
var mySqrt1 = function (x) {
  return parseInt(Math.sqrt(x))
}
// console.log(mySqrt1(5))

// 二分法
var mySqrt2 = function (x) {
  if (x < 1) {
    return 0
  } else if (x < 2) {
    return 1
  } else {
    var left = 1
    var right = x >> 1
    while ((left + 1) < right) {
      var mid = left + ((right - left) >> 1)
      if (mid === x/mid) {
        return mid
      } else if (mid < x/mid) {
        left = mid
      } else {
        right = mid
      }
    }
    return right > x /right ? left : right
  }
}
// console.log(mySqrt2(8))
// console.log(mySqrt2(22))
// console.log(mySqrt2(55.12))
// console.log(mySqrt2(89))
