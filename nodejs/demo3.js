const http = require('http');
const open = require('open');
 
const server = http.createServer((req, res) => {
    res.end("Hello, I'm now running in your browser.");
});
 
server.listen(8080, (error) => {
    if (error) {
        return console.log('ERROR: ', error)
    }
    
    console.log('Server is listening on 8080');

    open("http://localhost:8080");
});