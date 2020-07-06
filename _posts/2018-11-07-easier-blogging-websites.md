---
layout: post
title:  "Easier blogging website"
date:   2018-11-08 00:00:00 +0530
categories: [frontend]
tags: [web development ,frontend, library, medium editor]
author: "Gaurav Jain"
---

I have been doing freelance work for a while and had a requirement that was hard for me to think that ill be able to run with but I found [this library](https://github.com/yabwe/medium-editor) that does it for me.

What is does is make the editor that I am writing this on for me

## The Implementation

What this does is create an editable textarea tag that is filled with HTML that can make it website styled with which you can save as a HTML file or if you are using a templating engine(like Jinja, Mustache, DoT etc) you can save this content and render it by tagging it as save HTML(depending on your engine)

This comes in multiple [themes](https://github.com/yabwe/medium-editor/wiki/Themes) for the toggle buttons.

You can edit everything from creating [custom buttons](https://github.com/yabwe/medium-editor/blob/9156a11407451c0ee2e30d971798d6476de4d354/src/js/extensions/WALKTHROUGH-BUTTON.md) to the color of the buttons.

<div style="width:100%" style="text-align:center;padding:30px">
    <img src="/assets/easier-blogging/medium.png" alt="medium-test" width="700rem"/>
</div>


## Plug-Ins

There are lot of plug ins so don’t trying to re implement any of those if your purpose can be solved by any of those.