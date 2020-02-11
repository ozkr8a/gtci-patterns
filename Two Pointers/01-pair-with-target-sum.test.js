// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target. OUTPUT THEIR INDEXES

const pair_with_targetsum = function(arr, target_sum) {
  let left = 0, right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]

    if (sum === target_sum) {
      return [left, right]
    } 
    
    // If sum is smaller than the target sum, we need a bigger number, so we increment the left pointer
    if (sum < target_sum) {
      left += 1
    } else {
      //Sum is greater than target, we need a smaller number so decrement right pointer
      right -= 1
    }
  }
  return [-1, -1];
}

describe("Find a pair in the array whose sum is equal to the given target", () => {
  // Input: [1, 2, 3, 4, 6], target=6
  // Output: [1, 3]
  // Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
  it("Target = 6, Input: [1, 2, 3, 4, 6]", () => {
    expect(pair_with_targetsum([1, 2, 3, 4, 6], 6)).toEqual([1,3])
  })

  // Input: [2, 5, 9, 11], target=11
  // Output: [0, 2]
  // Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
  it("Target = 11, Input: [2, 5, 9, 11]", () => {
    expect(pair_with_targetsum([2, 5, 9, 11], 11)).toEqual([0,2])
  })
})