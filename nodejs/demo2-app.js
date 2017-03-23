const io = require('socket.io-client');
const socket = io('http://localhost:8000');

socket.on('tweet', (tweet) => {
    if (tweet !== null) {
        console.log(`${tweet.text} - ${tweet.user.screen_name}`)
    }
});