﻿# Talking Docs

# Project Startup Guide

## Introduction

Welcome to the Project Startup Guide. This document provides a step-by-step guide on how to start your project. Follow these instructions to set up and run the backend server and client application on your local machine.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- Node.js
- npm (Node Package Manager)

## Step 1: Starting the Backend Server

1. Open your terminal.
2. Navigate to the project directory using the `cd` command.

`cd /path/to/your/project/server`

Start the backend server by running the following command:

`node app.js`

# **Step 2: Starting the Client Application:**

1. Open a new terminal window (leave the previous one running for the server).
2. Navigate to the client directory of your project.

`cd /path/to/your/project/client`

`npm run dev `

This command will initiate the client application and usually start it on a different port (e.g., localhost:3000). You can access the client application by opening a web browser and navigating to the provided address.

This project utilizes the following libraries and technologies:

-**Multer**: A middleware for handling multipart/form-data, used for file uploads.
-**TensorFlow**: An open-source machine learning framework, used in this project for machine learning tasks.
-**BERT (Bidirectional Encoder Representations from Transformers)**: A pre-trained natural language processing model.
-**React**: A JavaScript library for building user interfaces.
-**Loader Spinner**: A React component for displaying loading spinners.
-**Express.js**: A Node.js web application framework used for building the server.
-**Node.js**: A JavaScript runtime for server-side development.
-**CSS**: Cascading Style Sheets for styling the project.

## Conclusion

You have successfully started your project with the backend server and client application running locally. You can now start working on your project and access it through your web browser.

### Additional Notes

* Make sure to keep the terminal running where your backend server is active.
* If you encounter any issues or errors, consult the project's documentation or seek assistance from your development team.

For any problems or further questions, please contact me via email at [avdhika@gmail.com](mailto:avdhika@gmail.com)

# Backend Technology Stack

In our backend development, we utilized the following technologies to build a robust and feature-rich application:

-**CORS (Cross-Origin Resource Sharing)**: We used the `"cors"` package to handle Cross-Origin Resource Sharing, allowing our web application to make secure requests to resources from different origins.

-**Express**: The `"express"` framework was the backbone of our application, simplifying the creation of APIs by providing routing, middleware support, and request/response handling.

-**JSON Web Tokens (JWT)**: `"jsonwebtoken"` enabled secure user authentication and authorization by transmitting information between the client and server as compact, secure JSON objects.

-**MongoDB and Mongoose**: We harnessed the power of `"mongodb"` and `"mongoose"` for our database needs. MongoDB is a NoSQL database, and Mongoose offers a schema-based abstraction for data management.

-**Multer**: `"multer"` facilitated the handling of file uploads in our application, making it easier to manage image, video, or document uploads.

-**Nodemon**: During development, we used `"nodemon"` to monitor changes in our code and automatically restart the application, streamlining the testing and debugging process.

-**PDF-Parse**: The `"pdf-parse"` package allowed us to parse and extract text content from PDF files, making it possible to work with PDF documents seamlessly.

-**Validator**: `"validator"` was used for data validation and sanitization, ensuring the integrity and security of user input in our application.

# Frontend Technology Stack

For the frontend development of my application, I leveraged the following technologies to create a user-friendly and interactive experience:

- **@tensorflow-models/qna**: I integrated the `"@tensorflow-models/qna"` library to enable question-answering capabilities in my application. This library utilizes machine learning models to answer user questions based on the provided context.
- **@tensorflow/tfjs**: `"@tensorflow/tfjs"` is the TensorFlow.js library, allowing me to run machine learning models directly in the browser. This was crucial for integrating machine learning capabilities on the client side.
- **React**: I built my user interface using the `"react"` library, which is a popular JavaScript library for creating interactive and dynamic user interfaces. It enables component-based development and efficient updates.
- **React DOM**: `"react-dom"` is used in conjunction with React to render React components into the DOM (Document Object Model). It is an essential part of the React ecosystem for web applications.
- **react-loader-spinner**: The `"react-loader-spinner"` package provided loading spinners and animations to enhance the user experience. These visual cues indicate that something is happening in the background, such as data loading.
- **React Router and React Router DOM**: I implemented client-side routing using `"react-router"` and `"react-router-dom."` These packages allowed me to create a single-page application (SPA) with multiple views, enabling navigation and content updates without full page reloads.

By utilizing this frontend technology stack, I successfully created an application that combines machine learning capabilities with a responsive and engaging user interface, ensuring a seamless and enjoyable experience for my users.

## Questions

### Q1) Difference between Node.js and Express.js

### Q2) What is MVC architecture with examples

### Q2) Follow-up: If someone is designing the logic for sending a welcome email after creating an account, should it reside in the controller layer or the model layer?

### Q3) Can you tell me the steps of how the given code works

```javascript
async function fetchdata(){
    const data = await fetch(url)
    const response = await data.json();
    console.log(response)
}
```

## Questions

### Q4) Which will run first: `console.log("fetch completed")` or `const data = await fetch(url)`?

```javascript
async function fetchdata(){
    const data = await fetch(url)
    console.log("fetch completed")
}
```

## Questions

### Q4 Follow-up: What if we assume that the `fetch` operation takes 2 seconds and there is a lengthy loop that takes 3 seconds? What will be printed first?

```javascript
async function fetchdata(){
    // Lengthy for loop that takes 3 seconds
    for (let i = 0; i < 3000000000; i++) {
        // This loop is lengthy and takes approximately 3 seconds
    }
    const data = await fetch(url)
    console.log("fetch completed")
}
```

## Question

### Q5: Let's say there is a file asynchronous operation that takes 1 second and a promise that takes 2 seconds. Which will run first?

### Q6 Single-Core Processor and Multiple Fetch Operations

Consider a scenario with a single-core processor where all `fetch` operations take 1 second each. Given the following code with multiple asynchronous functions, how will the program run in terms of execution order?

```javascript
async function fetchdata(){
    const data = await fetch(url)
    console.log("fetch completed1")
}

async function fetchdata(){
    const data = await fetch(url)
    console.log("fetch completed2")
}

async function fetchdata(){
    const data = await fetch(url)
    console.log("fetch completed3")
}

async function fetchdata(){
    const data = await fetch(url)
    console.log("fetch completed4")
}

async function fetchdata(){
    const data = await fetch(url)
    console.log("fetch completed5")
}
```

## React Questions

### 1. Explain the lifecycle of `useEffect` in React and how it works in practice.

Explain the lifecycle of `useEffect` in React and how it works in practice.

### 2. Alternatives to `useEffect` for Data Fetching

### 3. The Cleanup Function in `useEffect`

### 4. Explaining Caching

### 5. Code Splitting

What does the term "code splitting" refer to in web development, and how can it be beneficial for application performance?

### 6. Lazy Loading Concept

"What is lazy loading?" and provide an explanation of the concept, ideally in the context of web development?
