---
layout: post
title:  "Add Binary"
date:   2019-07-02 00:00:00 +0530
categories: [interview question]
tags: [competitve coding,binary number,recursion,gauravjain98,blog,training,string,leetcode]
author: "Gaurav Jain"
---

## The Question
    
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

```
Example 1:

Input: a = "11", b = "1"
Output: "100"
```

You can practice it on [leetcode](https://leetcode.com/problems/add-binary/) before reading the solution

## Solution

Relatively a simple solution. we start adding from the end of both the strings.

We check if the sum>2 then we get the mod of the sum and the carry becomes true and add the result normally.

if carry is true in the end we add a 1

We do this is because always inserting at 0 multiple times takes too long. So we reverse the string in the end;

## Code In Java
 ```
class Solution {

	public String addBinary(String a, String b) {
        StringBuilder result = new StringBuilder();
        int i = a.length();
        int j = b.length();
        boolean carry = false;
        int sum;
        while (i > 0 || j > 0) {
            sum = carry?1:0;
            if (i > 0) sum += a.charAt(--i) - '0';
            if (j > 0) sum += b.charAt(--j) - '0';
            carry = sum/2 == 1;
            sum = sum % 2;
            result.append(sum);
        }
        if (carry) result.append(1);
        return result.reverse().toString();
	}
}
```

### Theoretical

    Space Complexity: O(N)

    Time Complexity: O(N)

### Leetcode

    Memory: 36.1 MB

    Runtime: 1 ms

## Evaluation
    Time: 99.98%
    
    Space: 96.13%

