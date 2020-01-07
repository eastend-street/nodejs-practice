const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>Hello node</h1>");
    res.end();
  }

  if (req.url === "/about") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>We are awesome!</h1>");
    res.end();
  }

  if (req.url === "/contact") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>No contact!</h1>");
    res.end();
  }
};

module.exports = requestHandler;
