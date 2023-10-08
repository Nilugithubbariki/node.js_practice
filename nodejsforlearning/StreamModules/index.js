const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (error, data) => {
  //     if (error) return console.error(error);
  //     res.end(data.toString());
  //   });

  //2nd way

  //   const rstream = fs.createReadStream("input.txt");
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", (error) => {
  //     console.log(error);
  //     res.end("file not found");
  //   });

  //3rd way(Stream Pipe)

  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});
server.listen(8000);
