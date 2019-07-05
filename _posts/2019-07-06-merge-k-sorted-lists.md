---
layout: post
title:  "Merge K Sorted Lists"
date:   2019-07-06 00:00:00 +0530
categories: [interview question]
tags: [competitve coding,dictionary,tries,recursion,gauravjain98,blog,training,string,leetcode,hackerrank,hackerearth,american express]
author: "Gaurav Jain"
---

## The Question
    
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

```
Examples:
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
```

You can practice it on [leetcode](https://leetcode.com/problems/merge-k-sorted-lists/) before reading the solution

## Solution

This is a simple solution in which we define a compaeator for the Node class and using it we will create a Priority Queue.

Using the Queue we will add all the nodes.

Rest is just linking all the nodes of the Queue and in the ending the list so it does not form a loop

The dummy node is because null will cause a error and hence we create a dummy node and adding everything to the dummy node

## Code In Java
{% highlight java %}

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    class ListNodeComparator implements Comparator<ListNode>{
        public int compare(ListNode l1, ListNode l2) {
            return l1.val - l2.val;
        }
    }
    public ListNode mergeKLists(ListNode[] lists) {
        int count = 0;
        PriorityQueue<ListNode> q = new PriorityQueue<ListNode>(new ListNodeComparator());
        for(ListNode l :lists){
            while(l!=null){
                q.add(l);
                count++;
                l = l.next;
            }
        }
        ListNode head = new ListNode(0);
        ListNode temp = head;
        while(!q.isEmpty()){
            temp.next = q.poll();
            temp = temp.next;
        }
        temp.next = null;
        return head.next;
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

    Memory: 43 MB

    Runtime: 6 ms

## Evaluation

    Time: 54.33%
    
    Space: 26.74%