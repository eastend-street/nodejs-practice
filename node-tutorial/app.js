const http = require("http");

const server = http.createServer((req, res) => {
  console.log(__dirname);
  console.log(__filename);
  res.setHeader("Content-type", "text/html");
  res.write("<h1>hello node</h1>");
  res.end();
});

server.listen(3000);
