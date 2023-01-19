const request = require("request");
const fs = require("fs");
const input = process.argv.slice(2);

request(input[0], (error, response, body) => {
  fs.writeFile(input[1], body, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}`);
  });
});
