import * as io from 'socket.io-client';

import { ITweet } from './ITweet';

const socket = io('http://localhost:80');
const tweetsElm = document.querySelector('.tweets');

if (tweetsElm !== null) {
    if (typeof(Storage) !== "undefined") {
        var tweets: ITweet[] = getLocalTweets();
        if (tweets.length > 0) {
            tweets.reverse().forEach((tweet) => {
                renderTweet(tweetsElm, tweet);
            });
        }

        if (tweetsElm !== null) {
            socket.on('tweet', function (tweet: ITweet) {
                var tweets = getLocalTweets();
                if (tweet !== null) {
                    tweets.unshift(tweet);
                    setLocalTweets(tweets);
                    renderTweet(tweetsElm, tweet);
                }
            });
        }
    }
}

function renderTweet (elm: Element, tweet: ITweet): void {
    elm.innerHTML = `<li class="ms-font-m">${tweet.text} - <span class="handle">@${tweet.user.screen_name}</span></li>${tweetsElm.innerHTML}`;
}

function getLocalTweets (): ITweet[] {
    var tweetsString = localStorage.getItem("tweets");
    var tweets = JSON.parse(tweetsString);
    return tweets !== null ? tweets : [];
}

function setLocalTweets (tweets: ITweet[]) {
    if (tweets.length >= 15) {
        tweets = tweets.slice(0, 14);
    }
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

console.log('Ready');