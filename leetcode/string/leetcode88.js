let nums1 = [ 1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1

  while(i >= 0 && j >= 0) {
    // 比较两根指针的指，取较大的，从 nums1 尾部填补
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums1[k] = nums2[j]
      j--
      k--
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }

};

merge(nums1, m, nums2, n)

console.log(nums1);
