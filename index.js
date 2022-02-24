// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const http = require('http');

http
  .createServer((res) => {
    console.log(res);
    res.end('helloworld');
  })
  .listen(8080);
