import * as http from "http";

const hostname = "localhost";
const port = 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World. OMG");
});

server.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}`);
});
