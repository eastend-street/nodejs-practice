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

  if (req.url === "/send-message") {
    res.setHeader("Content-type", "text/html");
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message'/><input type='submit' value='send message'/></form>"
    );
    res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];

    req.on("data", package => {
      console.log(package);
      body.push(package);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      console.log(message);
    });
  }
};

module.exports = requestHandler;
