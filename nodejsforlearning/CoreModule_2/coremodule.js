const fs = require("fs");
//Creating a new file
// fs.writeFileSync("read.txt", "Wellcome Nilanchala");

// fs.writeFileSync("read.txt", "Wellcome Nilanchala Bariki");

// fs.appendFileSync("read.txt", "How are you I am fine thank you:");
// fs.appendFileSync("reread.txt", "Hello Nilanchala");
//Node.js includes a additional data type called buffer
//(not available in browser's javascript).
//Buffer is mainly used to store binary data,
//while reading from a file or reciving packets over the nework.

// const buf_Data = fs.readFileSync("read.txt");
// console.log(buf_Data);
{
  /* <Buffer 57 65 6c 6c 63 6f 6d 65 20 4e 69 6c 61 6e 63 68 61 6c 61 20 42 61 72 69 6b 69 0d 0a 0d 0a 48 6f 77 20 61 72 65 20 79 6f 75 20 49 20 61 6d 20 66 69 6e ... 12 more bytes> */
}

// org_data = buf_Data.toString();
// console.log(org_data);

// fs.renameSync("read.txt", "reread.txt");
