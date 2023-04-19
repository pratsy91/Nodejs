const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<body><h1>My Nodejs server!</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
