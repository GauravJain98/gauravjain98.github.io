---
layout: post
title:  "1 bit and 2 bit characters"
date:   2019-07-05 00:00:00 +0530
categories: [interview question]
tags: [competitve coding,dictionary,tries,recursion,gauravjain98,blog,training,string,leetcode,hackerrank,hackerearth,american express]
author: "Gaurav Jain"
---

## The Question

We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).

Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.

```
Examples:

Input: 
bits = [1, 0, 0]
Output: True

Explanation: 
The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.

Input: 
bits = [1, 1, 1, 0]
Output: False

Explanation: 

The only way to decode it is two-bit character and a two-bit character. So the last character is NOT a one-bit character.
```

You can practice it on [leetcode](https://leetcode.com/problems/1-bit-and-2-bit-characters/) before reading the solution

## Solution

We first move the counter will we get a 1 after that we can start pairing a 2 bit character if the 1st bit is 1 i.e. 10 and 11.

If it is 2 bit we will move 2 characters and if 1 then we move 1(obviously)

Once we reach the last character then we depending on the character length of last bit we will return it.

## Code In Java
{% highlight java %}
class Solution {
    public boolean isOneBitCharacter(int[] bits) {
        int n = bits.length;
        int j=0;
        while(bits[j]==0){
            j++;
            if(j==n){
                return true;
            }
        }
        int i=j;
        while(i<n){
            if(bits[i]==0){
                i++;                
                if(i==n){
                    return true;
                }
            }else{
                i+=2;
                if(i==n){
                    return false;
                }
            }
        }
        return true;
    }
}
{% endhighlight %}

### Theoretical

    Time Complexity: O(N)

    Space Complexity: O(1)

### Leetcode

    Memory: 36.7 MB

    Runtime: 0 ms

## Evaluation

    Time: 100.00%
    
    Space: 100.00%