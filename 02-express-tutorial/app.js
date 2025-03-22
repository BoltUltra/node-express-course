const { readFileSync } = require("fs");
const http = require("http");

const homepage = readFileSync("./navbar-app/index.html");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(8000);
