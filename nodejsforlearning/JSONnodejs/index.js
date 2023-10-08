//What is full form of JSON?
// JSON stands for javaScript Object Notation. JSON is a lightwight format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.
const fs = require("fs");
const bioData = {
  name: "Nilanchala",
  age: 24,
};
// const jsonData = JSON.stringify(bioData);
// const objData = JSON.parse(jsonData);
// console.log(objData);

// 1: Convert to JOSN
// 2: convert to new file.
// 3: readfile
// 4: again convert back to js obj original
// 5: console.log

// const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (error) => {
//   console.log("done");
// });

fs.readFile("json1.json", "utf-8", (error, data) => {
  //   console.log(data);

  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});
