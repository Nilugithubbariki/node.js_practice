// The http.createServer() method includes request and response prameters which is suppliec by Node.js.
// The request object can be used to get information about the current HTTP.
// e.g., url, request header, and data.
// The response object can be used to send a response for a current HTTP.
// If the response from the HTTP server is supposed to be displayed as HTTP.
// you should include an HTTP header with the correct content type:

const http = require("http");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/UserApi/Userapi.json`, "utf-8");
const objectData = JSON.parse(data);
const server = http.createServer((request, response) => {
  //   console.log(request.url);
  if (request.url == "/") {
    response.end("Hello From the otherSide");
  } else if (request.url == "/about") {
    response.end("Hello from the AboutUs sides");
  } else if (request.url == "/userapi") {
    response.writeHead(200, { "Content-type": "aplication/json" });
    response.end(objectData[0].title);
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end("<h1>404 error pages. Page doesn't exist</h1>");
  }
});
server.listen(8000, () => {
  console.log("listening to the port no 8000");
});
