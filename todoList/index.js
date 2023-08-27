// we want to render our todoList with node server now
//not able to get css and js with Html, habe to find the solution
const http = require("http");
const fs = require("fs");
const port = "8000";

function handleRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/todolist") {
    fs.readFile("./index.html", function (err, data) {
      if (err) {
        res.end("Found error");
      }
      res.end(data);
    });
  } else {
    res.end("<h2>Path doesn't Exist</h2>");
  }
}

const server = http.createServer(handleRequest);

server.listen(port, function (err) {
  if (err) {
    console.log("error", err);
    return;
  }
  console.log("Server is running on port", port);
});
