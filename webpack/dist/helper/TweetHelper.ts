import { ITweet } from '../../../gulp/ts/ITweet';

export function getLocalTweets (): ITweet[] {
    var tweetsString = localStorage.getItem("tweets");
    var tweets = JSON.parse(tweetsString);
    return tweets !== null ? tweets : [];
}

export function setLocalTweets (tweets: ITweet[]) {
    if (tweets.length >= 15) {
        tweets = tweets.slice(0, 14);
    }
    localStorage.setItem("tweets", JSON.stringify(tweets));
}