import * as io from 'socket.io-client';

const socket = io('http://localhost:80');
const tweetsElm = document.querySelector('.tweets');

if (tweetsElm !== null) {
    socket.on('tweet', (tweet: any) => {
        if (tweet !== null) {
            tweetsElm.innerHTML = `<li class="ms-font-m">${tweet.text} - <span class="handle">@${tweet.user.screen_name}</span></li>${tweetsElm.innerHTML}`;
        }
    });
}

console.log('Ready');