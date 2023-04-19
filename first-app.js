const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;
  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      res.write("<html>");
      res.write(`<body>${data}</body>`);
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="msg" ><button type="submit">send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    });
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  }
  // res.setHeader("Content-type", "text/html");
  // res.write("<html>");
  // res.write("<body><h1>My Nodejs Server</h1><body>");
  // res.write("</html>");
  // res.end();
});

server.listen(3000);
