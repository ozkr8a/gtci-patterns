// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

const max_sub_array_of_size_k = function(k, arr) {
  let maxSum = 0, windowStart = 0, windowSum = 0

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum)
      windowSum -= arr[windowStart]
      windowStart++
    }
  }
  return maxSum;
};

describe("Find the maximum sum of any contiguous subarray of size ‘k’", () => {
  // Input: [2, 1, 5, 1, 3, 2], k=3 
  // Output: 9
  // Explanation: Subarray with maximum sum is [5, 1, 3].
  it("K = 3 and array = [2, 1, 5, 1, 3, 2]", () => {
    expect(
      max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])
    ).toEqual(9)
  })

  // Input: [2, 3, 4, 1, 5], k=2 
  // Output: 7
  // Explanation: Subarray with maximum sum is [3, 4].
  it("K = 2 and array = [2, 3, 4, 1, 5]", () => {
    expect(
      max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])
    ).toEqual(7)
  })
})