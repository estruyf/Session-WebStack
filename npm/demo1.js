var app = require('express')();
 
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});
 
app.listen(8080, (error) => {
    if (error) {
        return console.log('ERROR: ', error)
    }

    console.log('Server is listening on 8080. Navigate to: http://localhost:8080')
});