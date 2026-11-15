import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHeader(200,{"Content-Type":"text/html"});
    res.write("<h1>My Server</h1>");
    res.write("<p> this is a simple http server created using node.js.</p>");
    res.end();
});

const port = 4000;
server.listen(port,() => {
    console.log(`Server running at http://localhost:${port}/`);
});