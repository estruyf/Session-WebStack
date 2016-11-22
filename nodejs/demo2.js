const io = require('socket.io')(80);
const cfg = require('../config.json');
const moment = require('moment');

const Twitter = require('node-tweet-stream');
const tw = new Twitter(cfg);

tw.track('#office365');
tw.track('#sharepoint');
tw.track('#spsgeneva');
tw.track('javascript');

tw.on('tweet', tweet => {
    io.emit('tweet', tweet);
    console.log(`[${moment().format('HH:mm:ss')}]: new tweet`);
});