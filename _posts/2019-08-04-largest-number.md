---
layout: post
title:  "Palindrome Linked List"
date:   2019-07-19 00:00:00 +0530
categories: [interview question]
tags: [competitve coding,dictionary,tries,recursion,gauravjain98,blog,training,string,leetcode,hackerrank,hackerearth,array,sorting,list,arraylist,strings,interview]
author: "Gaurav Jain"
---

## The Question

Given a list of non negative integers, arrange them such that they form the largest number.

```
Input: [10,2]
Output: "210"
```

```
Input: [3,30,34,5,9]
Output: "9534330"
```
You can practice it on [leetcode](https://leetcode.com/problems/largest-number/) before reading the solution

## Solution
We need to find the largest number that can be formed by the numbers given to us. 
The possibilites are N!. Same as sorting so we implement a comparator and sort the array.

## Code In Java

{% highlight java %}
class Solution {
    // Comparator to find the bigger integer formed
    private class LargerNumberComparator implements Comparator<String> {
        @Override
        public int compare(String a, String b) {
            String order1 = a + b;
            String order2 = b + a;
           return order2.compareTo(order1);
        }
    }
    public String largestNumber(int[] nums) {

        // Integer to String
        String s[] = new String[nums.length];
        for(int i=0;i<nums.length;i++){
            s[i] = nums[i]+"";
        }

        //Sort the Array
        Arrays.sort(s, new LargerNumberComparator());

        // Edge case of begin zero
        if (s[0].equals("0")) {
            return "0";
        }

        // Join String Array to String 
        StringBuilder ans = new StringBuilder();
        for(String a:s){
            ans.append(a);
        }

        return ans.toString();
    }
}
{% endhighlight %}


### Theoretical

    Time Complexity: O(Nlog(N))// As it is a sorting process

    Space Complexity: O(N)// we have to save all nodes

### Leetcode

    Memory: 36 MB

    Runtime: 4 ms

## Evaluation

    Time: 94.30%

    Space: 87.30%