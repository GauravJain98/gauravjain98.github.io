---
layout: post
title:  "First Missing Positive"
date:   2019-07-06 00:00:00 +0530
categories: [interview question]
tags: [competitve coding,dictionary,tries,recursion,gauravjain98,blog,training,string,leetcode,hackerrank,hackerearth,american express]
author: "Gaurav Jain"
---

## The Question

Given an unsorted integer array, find the smallest missing positive integer.

```
Example 1:

Input: [1,2,0]
Output: 3

Example 2:

Input: [3,4,-1,1]
Output: 2

```

You can practice it on [leetcode](https://leetcode.com/problems/first-missing-positive/) before reading the solution

## Solution

We create a set of already encountered intergers if a new integer is found we add it to the Priority Queue.

In the end we find the first missing value

## Code In Java
{% highlight java %}

class Solution {
    public int firstMissingPositive(int[] nums) {
        PriorityQueue<Integer> q = new PriorityQueue<>();
        HashSet<Integer> set = new HashSet<>();
        for(int i:nums){
            if(i>0 && !set.contains(i)){
                q.add(i);
                set.add(i);
            }
        }
        int count = 1;
        while(!q.isEmpty()){
            int val = q.poll();
            if(val!=count){
                return count;
            }
            count++;
        }
        return count;
    }
}
{% endhighlight %}

### Theoretical

    Time Complexity: O(N)

    Space Complexity: O(N)

### Leetcode

    Memory: 35.8 MB

    Runtime: 3 ms

## Evaluation

    Time: 6.09%
    
    Space: 99.07%