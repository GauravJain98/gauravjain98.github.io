---
layout: post
title:  "Same Binary Tree"
date:   2019-06-26 00:00:00 +0530
categories: [interview-question]
tags: [competitve coding,binary tree,recursion,gauravjain98,blog,training]
author: "Gaurav Jain"
---

## The Question
    
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
You can practice it on [leetcode](https://leetcode.com/problems/same-tree/) before reading the solution

## Solution

Let us break the question up to an objective parts

The first Idea when we have tree is recursion as we never know their depth.
We have 2 steps here.
1. Check if the roots are same (both null or both have same val)
2. If they are not then return false
3. if the root is same then we check if the respective left and right are same

## Code In Java
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        boolean ans =true;
        if(p==null&&q==null){
            return ans;
        }
        if(p==null){
            return false;
        }
        if(q==null){
            return false;
        }
        return (p.val==q.val)&&isSameTree(p.left,q.left)&&isSameTree(p.right,q.right);
    }
}
```

## Evaluation

### Theoretical

    Space Complexity: O(h)

    Time Complexity: O(n)

### Leetcode

    Memory: 34.1MB
    Runtime: 0 ms
