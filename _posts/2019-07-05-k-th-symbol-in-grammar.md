---
layout: post
title:  "kth Symbol in Grammar"
date:   2019-07-05 00:00:00 +0530
categories: [interview question]
tags: [competitve coding,dictionary,tries,recursion,gauravjain98,blog,training,string,leetcode,hackerrank,hackerearth,american express]
author: "Gaurav Jain"
---

## The Question
    
On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

Given row N and index K, return the K-th indexed symbol in row N. (The values of K are 1-indexed.) (1 indexed).

```
Examples:
Input: N = 1, K = 1
Output: 0

Input: N = 2, K = 1
Output: 0

Input: N = 2, K = 2
Output: 1

Input: N = 4, K = 5
Output: 1

Explanation:
row 1: 0
row 2: 01
row 3: 0110
row 4: 01101001
```

You can practice it on [leetcode](https://leetcode.com/problems/k-th-symbol-in-grammar/) before reading the solution

## Solution

This a compiler design problem with the following grammer

```
0->01
1->10
```

<div style="width:100%" style="height:60rem;overflow:hidden;padding:30px;text-align:center">
    <img src="/assets/k-th-symbol-in-grammer-explaination.png" alt="step 1" width="500rem"/>
<br>
Derivation Tree
</div>

From the above we can see when ever we have a right move we change the value and if it is left then we don't

```
K K-1 Binary No. of 1  Ans
1  0  0       Even     0
2  1  1       Old      1
3  2  10      Old      1
4  3  11      Even     0
5  4  100     Old      1
```

Once we find this pattern the code is really simple all we need to check is 2^N < K

## Code In Java
{% highlight java %}
class Solution {
    public int kthGrammar(int N, int K) {
        if(Math.pow(2,N) < K){return 0;}
        int count = 0;
        K--;
        while(K!=0){
            count += K%2;
            K/=2;
        }
        return (count%2 == 0)?0:1;
    }
}

{% endhighlight %}

2 Line Solution

{% highlight java %}
class Solution {
    public int kthGrammar(int N, int K) {
        if(Math.pow(2,N) < K){return 0;}
        return (Integer.bitCount(K-1)%2 == 0)?0:1;
    }
}
{% endhighlight %}

### Theoretical

    Time Complexity: O(log(N))

    Space Complexity: O(1)

### Leetcode

    Memory: 32.8 MB

    Runtime: 0 ms

## Evaluation

    Time: 100.00%
    
    Space: 5.07%(No clue how to improve this)