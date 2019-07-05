---
layout: post
title:  "Maximum Subarra"
date:   2019-07-04 00:00:00 +0530
categories: [interview question,amazon]
tags: [competitve coding,dictionary,tries,recursion,gauravjain98,blog,training,string,leetcode,hackerrank,hackerearth,american express]
author: "Gaurav Jain"
---

## The Question
    
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

```
Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

You can practice it on [leetcode](https://leetcode.com/problems/maximum-subarray/) before reading the solution

## Solution

This is solved using [Kadane's Algorithm](https://hackernoon.com/kadanes-algorithm-explained-50316f4fd8a6?gi=fb66dadacf02)

What we do is for each element we try to check if adding the element to old array makes the old array sum larger than the element here alone

If it alone is larger than the sum of old array its better to just use the element alone

## Code In Java
```
class Solution {
    public int maxSubArray(int[] nums) {
        int max = Integer.MIN_VALUE;
        int curr = 0;
        for(int i:nums){
            if(i>curr+i){
                curr = i;
            }else{
                curr+=i;
            }
            max=Math.max(max,curr);
        }
        return max;
    }
}
```

### Theoretical

    Time Complexity: O(N)

    Space Complexity: O(M + (N-M)26)

### Leetcode

    Memory: 38.6 MB

    Runtime: 1 ms

## Evaluation

    Time: 90.31%
    
    Space: 45.31%