const http = require('http');
const fs = require('fs');

fs.readFile('./nodejs/index.html', (err, html) => {
    if (err) {
        throw err; 
    }

    const server = http.createServer((req, res) => {  
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
    });
    
    server.listen(8080, (error) => {
        if (error) {
            return console.log('ERROR: ', error)
        }
        
        console.log('Server is listening on 8080');
    });
});