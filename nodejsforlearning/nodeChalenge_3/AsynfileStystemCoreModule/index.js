const fs = require("fs");
// fs.writeFile("read.txt", "today is awesome day :", (error) => {
//   console.log("file is created");
// });

//We pass them a function as an argument a callback.
//that gets called when that task completes.
//the callback has an argument that tells you whether
//the operation completed successfully
//Now we need to say what to do when fs.writeFile
//has completed (even if it's nothing),and start
//checking for errors.

// fs.appendFile("read.txt", "My name is Nilanchala Bariki", (error) => {
//   console.log("task completed");
// });

fs.readFile("read.txt", "UTF-8", (error, data) => {
  console.log(data);
});
