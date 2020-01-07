const http = require("http");

const router = require("./routes")

const server = http.createServer(router)
;

server.listen(3000);
