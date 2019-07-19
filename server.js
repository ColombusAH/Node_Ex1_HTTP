const http = require("http");

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

module.exports = function init() {
  http
    .Server((req, res) => {
      console.log("server: request recieved");
      sleep(2000);
      res.writeHead(200);
      res.end("ok");
    })
    .listen(8001);
};
