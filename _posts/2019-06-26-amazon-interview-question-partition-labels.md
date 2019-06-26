---
layout: post
title:  "Amazon Interview Question Partition Labels"
date:   2019-06-26 00:00:00 +0530
categories: [interview question,amazon]
tags: [competitve coding,amazon,partition labels,gauravjain98,blog,training]
author: "Gaurav Jain"
---

## The Question
    
A string <italic>S</italic> of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts. 
You can practice it on [leetcode](https://leetcode.com/problems/partition-labels/) before reading the solution

## Solution

Let us break the question up to an objective parts

What is required is that no 2 partitions can have the same characters in them.

So what we are going to do is the following:

1. Have a frequency table/array(called right) of the whole string.
2. Iterate over string from the left and storing all character we have seen in a set and update the frequency table of the right.
3. Whenever we have a character turn 0 in the table(the character is only in the left) we remove it from the seen set as it is only in the left now.
4. If seen is empty that means that everything on the left is only in that partition hence we can add it to the ans array reset our count 

## Code In Java
```
class Solution {
    public List<Integer> partitionLabels(String S) {
        List<Integer> ans = new ArrayList<Integer>();
        if(S.length() == 0){
            return ans;
        }
        char[] arr = S.toCharArray();
        HashSet<Character> seen = new HashSet<Character>();
        int[] right = new int[26];
        for(char c:arr)
            right[c-'a']++;
        int count =0;
        for(char c:arr){
            count++;
            seen.add(c);
            if(--right[c-'a'] == 0){
                seen.remove(c);
                if(seen.isEmpty()){
                    ans.add(count);
                    count=0;
                }
            }
        }
        return ans;
    }
}
```

## Evaluation

### Theoretical

    Space Complexity: O(n)

    Time Complexity: O(n)

### Leetcode

    Memory: 36.2MB
    Runtime: 4ms
