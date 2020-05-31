// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 请找出其中最小的元素。

// 你可以假设数组中不存在重复元素。

// 示例 1:  

// 输入: [3,4,5,1,2]
// 输出: 1
// 示例 2:

// 输入: [4,5,6,7,0,1,2]
// 输出: 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var l = 0
  var r = nums.length - 1
  var mid
  while (l < r) {
    mid = l + ((r - l) >> 1)
    if (nums[mid] > nums[r]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return nums[l]
};