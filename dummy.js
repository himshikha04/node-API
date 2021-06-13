const http = require("http");

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
//   console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello JIETians");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
})