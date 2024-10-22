const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // change to IP address of computer, more on that below
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Connected to the server!");
    // setInterval(() => {
    //   conn.write("Move: up");
    // },3000)
    conn.write("Name: DKP");
  });
  

  conn.on("data", (data) => {
    console.log("Received from server: ", data);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {
  connect
};