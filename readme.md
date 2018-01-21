## Building a GraphQL Server

NOTE: To test different databases there are different schema files and in server.js only one is being used and rest are commented.

### Connecting GraphQL Server with various types of databases:
  1.  Harcoded Data
  2.  JSON Server
  3.  MySQL DB - Working on it
  4.  Mongo DB - Working on it

### Pre-Requisites: 
  1.  Node should be installed and running
  
### Commands that I used on windows CMD for installs:
```
npm init
npm install express express-graphql nodemon graphql --save
node server.js
npm run dev:server
npm install json:server axios --save
npm run json:server
```


### Some of the Frameworks installed above:
  1.  **Express:** Cool abstract framework layer that works on top of node.js HTTP Server to keep things neat and easy for us.
  2.  **Express-GraphQL:** Mainly used for graphiql view that can be launched on web browser.
  3.  **Nodemon:** Running the server once and then nodemon handles the part of reflecting all the saved changes done in the editor.
  4.  **GraphQL:** A query language created by Facebook. Great for mobile devices as it reduces the bandwidth with its great to the point data given out implmentation.
  5.  **JSON Server:** JSON Server quick back-end for prototyping and mocking up and running in seconds. 
  6.  **Axios:** Easy way to call REST methods - GET, POST, PATCH, DELETE and more
