---
layout: post
title:  "Iterative Inorder Traversal"
date:   2019-07-11 00:00:00 +0530
categories: [interview question]
tags: [competitve coding,dictionary,tries,recursion,gauravjain98,blog,training,string,leetcode,hackerrank,hackerearth,american express]
author: "Gaurav Jain"
---

## The Question

Inorder traversal of a tree

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
```

You can practice it on [leetcode](https://leetcode.com/problems/binary-tree-inorder-traversal/) if you want

## Solution

In case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal s reversed can be used.
Example: Inorder traversal for the above-given figure is 

Inorder (Left, Root, Right)

## Code In Java

{% highlight java %}
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
    List<Integer> ans;
    public Solution(){
        ans = new ArrayList<>();
    }
    public List<Integer> helperIterativeInorderTraversal(TreeNode root) {
        if(root==null){return ans;}
        Stack<TreeNode> st = new Stack<>();
        st.push(root);
        while(!st.isEmpty()){
            TreeNode node = st.pop();
            if(node.left!=null){
                TreeNode l = node.left;
                node.left = null;
                st.push(node);
                st.push(l);
            }else{
                ans.add(node.val);
                if(node.right!=null)
                    st.push(node.right);
            }
        }
        return ans;
    }
    public void iterativeInorderTraversal(TreeNode root) {
        System.out.println(StringUtils.join(helperIterativeInorderTraversal(root), " "));
    }
    public void recursiveInorderTraversal(TreeNode node) { 
        if (node == null) 
            return; 
        recursiveInorderTraversal(node.left); 
        System.out.print(node.key + " "); 
        recursiveInorderTraversal(node.right); 
    } 
}
{% endhighlight %}


### Theoretical

    Time Complexity: O(N)

    Space Complexity: O(N)
