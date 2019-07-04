---
layout: post
title:  "Add and Search Word Data Structure Design"
date:   2019-07-04 00:00:00 +0530
categories: [interview question,amazon]
tags: [competitve coding,dictionary,tries,recursion,gauravjain98,blog,training,string,leetcode,hackerrank,hackerearth,american express]
author: "Gaurav Jain"
---

## The Question
    
Design a data structure that supports the following two operations:

```
void addWord(word)
bool search(word)
```

search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter


```
Example

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
```

You can practice it on [leetcode](https://leetcode.com/problems/add-and-search-word-data-structure-design/) before reading the solution

## Solution

Requires making us a [tries](https://www.geeksforgeeks.org/trie-insert-and-search/) for the inserted string

Then we search the [tries](https://www.geeksforgeeks.org/trie-insert-and-search/) but when we encounter a '.' we try all 26 possibilities and move the index to the next word;

I am using a recursive solution as it will make the solution code simpler to understand/debug which has an advantage in interviews and in the work

## Code In Java
 ```
class WordDictionary {
    class Tries{
        boolean word;
        Tries[] next;
        Tries(){
            word = false;
        }
    }
    Tries base;
    /** Initialize your data structure here. */
    public WordDictionary() {
        base = new Tries();
    }    
    /** Adds a word into the data structure. */
    public void addWord(String word) {
        Tries temp = base;
        for(char c:word.toCharArray()){
            if(temp.next == null){
                temp.next = new Tries[26];
            }
            if(temp.next[c-'a'] == null){
                temp.next[c-'a'] = new Tries();
            }
            temp = temp.next[c-'a'];
        }
        temp.word = true;
    }
    
    /** Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. */
    public boolean search(String word) {
        return search(word,base);
    }
    public boolean search(String word,Tries base){
        if(base == null){return false;}
        for(int i=0;i<word.length();i++){
            if(word.charAt(i) == '.'){
                for(int j=0;j<26;j++){
                    if(base.next!=null && search(word.substring(i+1),base.next[j])){
                        return true;
                    }
                }
                return false;
            }
            else {
                if(base.next==null || base.next[word.charAt(i) - 'a'] == null){
                    return false;
                }
                base = base.next[word.charAt(i) - 'a'];
            }
        }
        return base.word;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */
```

### Theoretical

    Insert Time Complexity: O(N)

    Search Time Complexity: O(M + (N-M)26)

    M is the number of . in the search

### Leetcode

    Memory: 50.5 MB

    Runtime: 80 ms

## Evaluation

    Time: 42.06%
    
    Space: 100.00%

