// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:
// 输入: 123
// 输出: 321

//  示例 2:
// 输入: -123
// 输出: -321

// 示例 3:
// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

// 简单暴力的
var reverse1 = function(x) {
  // 判断是整数负数还是0
  var isSing = Math.sign(x)
  // 获得x绝对值的反转数
  var result = Math.abs(x).toString().split('').reverse().join('')
  // 如果是负数就拼上 负号
  result = isSing < 0 ? -result : result
  // 定义最大值和最小值
  var max = Math.pow(2, 31)
  var min = -max
  // 返回结果
  if (result > max || result < min) {
    return 0
  } else {
    return result
  }
};
// console.log(reverse1(1534236469))

// 通过取余数反转
var reverse2 = function(x) {
  // 取绝对值
  var ord = Math.abs(x)
  // 定义初始值
  var now = 0
  while(ord > 0) {
    now = now * 10 + ord % 10
    ord = Math.floor(ord / 10)
  }
  if (x < 0) {
    return now < Math.pow(2, 31) ? -now : 0
  } else {
    return now < Math.pow(2, 31) ? now : 0
  }
}
// console.log(reverse2(1534236469))