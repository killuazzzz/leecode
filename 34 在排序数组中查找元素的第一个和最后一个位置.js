// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 如果数组中不存在目标值，返回 [-1, -1]。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var l = 0
  var r = nums.length - 1
  var mid
  while(l <= r) {
    mid = l + ((r - l) >> 1)
    if (nums[mid] === target) {
      break
    }else if (nums[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  if (nums[mid] !== target) {
    return [-1, -1]
  }
  var le = mid
  var ri = mid
  while(nums[le - 1] === nums[mid]) {
    le --
  }
  while(nums[ri + 1] === nums[mid]) {
    ri ++
  }
  return [le, ri]
}
console.log(searchRange([5,7,7,8,8,10], 8))