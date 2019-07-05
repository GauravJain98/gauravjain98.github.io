---
layout: post
title:  "Flipe Equivalent Binary Trees"
date:   2019-06-28 00:00:00 +0530
categories: [interview question]
tags: [competitve coding,binary tree,recursion,gauravjain98,blog,training]
author: "Gaurav Jain"
---

## The Question
    
For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Write a function that determines whether two binary trees are flip equivalent.  The trees are given by root nodes root1 and root2.

You can practice it on [leetcode](https://leetcode.com/problems/flip-equivalent-binary-trees/) before reading the solution

## Solution

I have 2 solutions for this. I came up with the 2nd solution by myself but for the 1st one I had to read the leetcode solution
Let us break the question up to an objective parts

## Definition for a binary tree node.

{% highlight java %}
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
{% endhighlight %}


## Solution 1 ( Canonical Traversal )

A Canonical Traversal is of (root,min,max)

min = min(left,right)

max = max(left,right)

for the trees in question if their Canonical Traversals with a delimiter are same then they are flip equivalent

## Code In Java
{% highlight java %}
class Solution {
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        List<Integer> vals1 = new ArrayList();
        List<Integer> vals2 = new ArrayList();
        dfs(root1, vals1);
        dfs(root2, vals2);
        return vals1.equals(vals2);
    }

    public boolean Lmin(TreeNode root){
        // checks if the left node is smaller or null
        if(root.left == null){
            return false;
        }
        if(root.right == null){
            return true;
        }
        return root.left.val < root.right.val
    }
    public void dfs(TreeNode root, List<Integer> vals) {
        if (root != null) {
            vals.add(root.val);
            if (Lmin(root)) {
                dfs(root.left, vals);
                dfs(root.right, vals);
            } else {
                dfs(root.right, vals);
                dfs(root.left, vals);
            }
            vals.add(null);
        }
    }
}
{% endhighlight %}

### Theoretical

    Space Complexity: O(N1 + N2)

    Time Complexity: O(N1 + N2)

### Leetcode

    Memory: 35.6 MB

    Runtime: 1 ms


## Solution 2 ( Recursion )

This is a simplier, bit faster and space efficent.

At every node we have the option to flip or not if either of them makes the tree unequal it breaks and returns false


## Code in Java

```
class Solution {
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        if(root1 == null && root2 == null){return true;}
        if(root1 == null || root2 == null || root1.val != root2.val){return false;}
        return (flipEquiv(root1.left,root2.left) && flipEquiv(root1.right,root2.right))||(flipEquiv(root1.left,root2.right) && flipEquiv(root1.right,root2.left));
    }
}
```

### Theoretical

    Space Complexity: O(min(N1,N2))

    Time Complexity: O(min(H1,H2))

### Leetcode

    Memory: 34.5 MB

    Runtime: 0 ms

## Evaluation
    Canonical
        - Time: 12.20%
        - Space: 100.00%
        
    Recursion
        - Time: 100.00%
        - Space: 100.00%

