---
layout: post
title:  "How I Design Software ?"
date:   2019-01-26 23:00:00 +0530
categories: [software]
tags: [web,development,backend,django,django-rest-framework,DRF,frontend,design,how,to,gauravjain98,gaurav,jeklly,developer,designer,freelancer]
author: "Gaurav Jain"
---
## Disclaimer 

This is for small to intermediate projects 

# **For some background :**
- I am 3rd year Computer Science Undergraduate student.
- I taught myself to code(and I got a super smart mentor).
- I make freelance software here and there for startups and it mostly their main product and I get super scared that what if my software- crashes and they think I am a fraud.
- I am a back-end person because I hate when someone says(Mostly myself) "I don't know what's wrong but something is".

# **Let us start!!!**

The thing I learn from messing a lot of my own personal projects is that we can't just start coding. Don't get me wrong if you are starting and it's your own project and you don't mind it crashing and burning to get some experience and learn then code away but if you are making it for someone and it **Just cannot be crashing** what we need to do is designing the whole software before coding. 

## **Why do we design?**

I know it is one of the single most boring tasks that is possible! We love to code right away, but the problem is that about 90% of the developer time is spent debugging, refactoring or rewriting previously written code, So the best trick is to design your application first and then start coding. We have an overview of our code, see where we could go wrong and answer some questions like

- What algorithms should you use  
- Which architecture is most sensible for your project  
- What is the best database structure/schema for your project
- And many more....

## **Design How much and how???**

Now you know why you should design we need a way to know how and how much?? 

Wait how much there is a limit? Yes, there is something called over-designing as well.
So when we design we design till it is realistically possible to scale
basically this method we can get a server to handle 500-1000 hints/second without a problem 

Before we start designing we need to understand 3-tier architecture and the "pyramid of change"

### **3 Tier Architecture**

Any application that has any logic it uses this architecture

Any function in a gist: 

I Client makes a Request -- > II Server understands, calculated the required logic and makes the required queried for the required logic  --> III Database gives/stores the data --> II Server formulates a response and returns to the client --> I Client gets a response  

   
### **Pyramid of change**

<div style="text-align:center;">
<img src="/assets/pyramid-of-change.png" alt="step 1"  width="400rem"/>
</div>

This shows how changes scale:
1. Change the Front-End looks:
    1. Change the Front-End code
2. Change the Server Function:
    1. Change the Server code
    2. Change the Front-End code
3. Change the Database Structure:
    1. Change the Database code
    2. Change the Server code
    3. Change the Front-End code

## **Flow I follow while designing**

Now we know what architecture we will use and how changes scale. We can start designing at last 

We follow the same pattern as the 'Pyramid of Change' that is:-

- Design the Database structure
- Design the logic of your back-end
- Design your front-end


Step 2 and 3 can be worked on concurrently if you are an awesome full stack developer or you are a duo(Which is my preference)

## **Database Design**

### **Formal Definition**

- Database design is the organization of data according to a database model. 
- The designer determines what data must be stored and how the data elements interrelate. With this information, they can begin to fit the data to the database model

### **What does that mean?**

- Basically Database design is designing how your data should be stored.
- If you have only used a NoSQL database then you might be like what is the need for this.
- The problem is that NoSQL is not scalable.  
- NoSQL is originally referring to "nonSQL" or "nonrelational".
- But in real life, we "have" relations so we need a database that has relations build-in and are optimized for it.
- NoSQL is used for analytics and non-relational is used for NoSQL
- When we add relations that are not logical we can not queries logically.
- [This article](https://www.sitepoint.com/sql-vs-nosql-differences/) helps explain better 

### **How to do it?**

We need to solve some questions to be able to make a good database:

1. What is the purpose of your database?

This is supposed to answer what is your database used for basically the requirements for your projects

2. What tables and fields do you need?

Here we use visual representations such as <a href="https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model" >ER diagrams</a> they give proper relations for your data. I personally use a tool called [dbdesigner](http://dbdesigner.net/)  they have 3 free projects I keep deleting old projects. We also need to take care of the <a href="https://en.wikipedia.org/wiki/Database_normalization" > normality</a> of the database for future scalability

## **Front-end and Back-end Design**

Back-end and Front-end code change far more often than the database if you made your database as normal as possible.
So the way I approach it is simple but it can cause issues if we are time bound.

### **How to do it?**
#### **Starting Back-end**

1. First I make a full CRUD(**C**reate **R**ead **U**pdate **D**elete) API for every table.
2. After that, depending on the requirement I add basic nesting
- Example: For a quizzing project I will have tables Quiz, Question, and Options
- The CRUD API makes it possible to make each of them separately
- For 2 quiz of 10 questions and 4 options, each this will take 2 + 2x10 + 2x10x4 = 102 API calls from the front end which is not how the flow should go.
- By nesting the options in the question we reduce the calls to 2 + 2x10 = 22
- But nesting questions in the quiz will make the flow wrong as questions can be added after creating the quiz and do not affect the quiz object directly so we do not nest questions in the quiz
3. All the other changes just take place as the front end needs them
- This is the step that takes long as this slows the front-end but this step's time can be reduced as the back-end developer experience increase.

#### **Starting Front-end**

This is a relatively easy step from a coding design perspective as we are humans, we can intuitively feel the flow required and if we don't we need a UX/UI designer for this.  

##### Last we need is some Q/A testing that I also need to learn about