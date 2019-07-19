const http = require("http");

const url = "http://localhost:8001";

module.exports = async function() {
  for (let i = 0; i < 10; i++) {
    await http.get(url, res => {
      res.on("data", data => console.log(`server send ${data}`));
    });
  }
};
