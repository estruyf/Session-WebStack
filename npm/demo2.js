const app = require('express')();
const path = require('path');
const open = require('open');
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../nodejs/index.html'));
});
 
app.listen(8080, (error) => {
    if (error) {
        return console.log('ERROR: ', error)
    }

    console.log('Server is listening on 8080. Navigate to: http://localhost:8080');
    open("http://localhost:8080");
});