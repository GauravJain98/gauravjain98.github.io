---
layout: post
title:  "What is CICD ? Simple Steps to set it up for free!"
date:   2020-07-24 00:00:00 +0530
categories: [technologies ,gitlab,cicd]
tags: [gauravjain98,blog ,training ,interview ,cicd ,gitlab ci ,gitlab ,cicd  ,cicd pipeline ,cicd tools ,what is cicd ,azure devops cicd pipeline ,cicd jenkins ,gitlab cicd ,what is cicd pipeline ,cicd environment ,cicd process ,cicd pipelines ,aws cicd ,cicd stands for ,cicd interview questions ,jenkins cicd ,github cicd ,cicd definition ,cicd devops ,cicd pipeline tools ,cicd pipeline gitlab ,devops cicd ,cicd systems ,drone cicd ,cicd experience ,cicd meaning ,cicd pipeline jenkins ,jenkins cicd pipeline ,automation using cicd in jenkins examples ,golang cicd ,cicd development ,cicd software ,cicd tool ,cicd tutorial ,Free CICD Setup]
author: "Gaurav Jain"
---

# Introduction 

CI/CD is a term that confuses a lot of beginners when they hear about the software deployment process.

The new developer will sometimes find that when they pushed code to the production, the CI/CD pipeline stopped it in its track from wreaking havoc for the users but have no clue how it was able to do so.

We will discuss what is a CI/CD pipeline and we will also show you how to set one up for your project for free.

<i>Having some idea of docker images would be helpful</i>

# Why do we need CI/CD?

<a target="_blank" href="https://codefresh.io/continuous-deployment/engineers-struggle-with-ci-cd-automation-to-deploy-more-often/"><img style="width:50%" src="/assets/what-is-ci-cd-simple-set-up/why-ci-cd.jpeg"></a>

This survey shows that lack of automation is what prevents us from adding new features and speed to market.

As a Software developer, we can easily right multiple features fast. But we can not guaranty that our code works perfectly especially when we working in a team it could be that someone's code breaks our code.

The solution is having a pipeline that will check if everything in your code works without anything breaking. If everything works then deploy the code to production.

# What is CI/CD?

CI/CD has 2 parts
 - CI - Continuous Integration
 - CD - Continuous delivery / Continuous Delivery

## Continuous Integration

In this stage, your code is merged and integrated. This can be done multiple times a day depending on your team's velocity.

This is done using your version control services gitlab[https://gitlab.com], github[https://github.com] and more

## Continuous Deployment / Continuous Delivery

Here the pipeline does the major magic 

### Build

This mostly just checks if there are syntax errors or any simple errors.
This step is also known as a sanity check stage.

Docker build is one of the most common ways to perform this.
A good developer should do this stage locally as well before pushing it to any branch as good practice.

### Tests

Automated tests for your specific language run in this stage.

### Deployement

This is pushing your code to your deployment. We will use Heroku in this example

For every new push, the whole pipeline runs from the start again.

If any job in this pipeline fails even this for the code to pass we re-run the whole pipeline again

# Let us set it up!!

We will use the free CI/CD provided by [Gitlab](gitlab.com)

For your CI/CD pipeline to work all you require is to add a .gitlab-ci.yml file. Gitlab will use this file to configure its gitlab-runner.

You have a multistage pipeline in which for each stage you can have multiple jobs

## Specifying your stages
``` yaml
stages:
  - build
  - test
  - sonar-testing
  - stage-deploy
```

This is one of the first things you will have in your file (if you look at my file the other thing are the variables to run docker in docker)

## Configuring 

Each job starts as a clean install of your base docker container. The base image will be the docker images that is base of your project example python:3, node:latest, ruby:2.5, etc

The main point of having a base image is so you can install the requirements either having them in your base image or installing them in your container so you can run your script

Once you have your base image you install the requirements and your authentication in your before-script

## What actually happens

when you push your code with a .gitlab-ci.yml file [Gitlab](gitlab.com) gives the task for one of it’s shared runner. They are free and they run the pipeline.

Once everything required to run your job is installed in your shared runner, it will run your script.

Here is the example of a build stage

``` yaml
build:
  stage: build
  image: docker:stable
  services:
    - docker:19.03.0-dind
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY

  script:
    - docker build -t $CONTAINER_RELEASE_IMAGE .
    - docker push $CONTAINER_RELEASE_IMAGE
```
Here first the stage will run <span style="color:#275c8f">before_script</span>, login and then run the docker commands in <span style="color:#275c8f">script</span>

I have enclosed the complete .gitlab-ci.yml file [here](https://gitlab.com/GauravJain98/cicd)

I also gave a talk about the same at [DSC OMG](https://www.youtube.com/watch?v=unzi3EtZysA&t=1787s)

Next article would how to integrate static and dynamic testing in your CI/CD pipeline