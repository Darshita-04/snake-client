// setup interface to handle user input from stdin
let connection;


const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  // if (key === "w") {
  // }
  // if (key === "s") {
  // }
  // if (key === "a") {
  // }
  // if (key === "d") {
  // }
  switch (key) {
    case "m": {
      connection.write("Say: Hey, there!!");
    }
    case 'w': {
      connection.write("Move: up");
    }
    case "s": {
      connection.write("Move: down");
    }
    case "a": {
      connection.write("Move: left");
    }
    case "d": {
      connection.write("Move: right");
    }
  }
};
const setupInput = function (conn) {
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