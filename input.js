const { KEY_MAP } = require("./constants");
// setup interface to handle user input from stdin
let connection;

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (KEY_MAP[key]) {
    const message = KEY_MAP[key];
    connection.write(message);
  }
};


const setupInput = function(conn) {
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

module.exports = {
  setupInput
};