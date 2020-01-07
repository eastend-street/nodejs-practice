const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(
      "<h1>Hello Node!</h1><div><a href='/read-message'>Read message</a></div><div><a href='/write-message'>Write message</a></div>"
    );
    res.end();
  }

  if (req.url === "/write-message") {
    res.setHeader("Content-type", "text/html");
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message'/><input type='submit' value='Write message'/></form>"
    );
    res.end();
  }

  if (req.url === "/read-message") {
    res.setHeader("Content-type", "text/html");
    let text = fs.readFileSync("message.txt");
    res.write("<h1>" + text + "</h1>");
    res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];

    req.on("data", package => {
      body.push(package);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = requestHandler;
