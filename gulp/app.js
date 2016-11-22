const express = require('express');
const app = express();
const path = require('path');
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../gulp/index.html'));
});

app.use(express.static(path.join(__dirname, '../gulp/public')));
 
app.listen(8080, (error) => {
    if (error) {
        return console.log('ERROR: ', error)
    }

    console.log('Server is listening on 8080. Navigate to: http://localhost:8080')
});