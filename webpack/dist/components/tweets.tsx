import * as React from "react";
import * as io from 'socket.io-client';
import * as moment from 'moment';

import { ITweet } from '../../../gulp/ts/ITweet';
import * as TweetHelper from '../helper/TweetHelper';

const socket = io('http://localhost:80');

interface properties {}

interface componentState {
    tweets: ITweet[]
}

class Tweets extends React.Component<properties, componentState> {
    private tweets: ITweet[] = [];

    constructor () {
        super();

        // Set initial state
        this.tweets = TweetHelper.getLocalTweets();
        this.state = {
            tweets: this.tweets
        };

        socket.on('tweet', (tweet: ITweet) => {
            this.tweets.unshift(tweet);

            TweetHelper.setLocalTweets(this.tweets);

            this.tweets = this.tweets.slice(0, 10);

            this.setState({
                tweets: this.tweets
            });
        });
    }

    render() {
        if (typeof this.state.tweets !== 'undefined' && this.state.tweets !== null) {
            return (
                <div>
                    <h2 className="ms-font-l">Number of tweets: <span>{this.state.tweets.length}</span></h2>
                    <ul>
                    {
                        this.state.tweets.map((tweet: ITweet, index: number) => {
                            return (
                                <li className="ms-font-m" key={index}>
                                    <div className="tweet">
                                        <div className="avatar">
                                            <img src={tweet.user.profile_image_url_https} />
                                        </div>
                                        <div className="info">
                                            <p>
                                                <span className="handle">@{tweet.user.screen_name}</span>
                                                <span className="time">{moment(tweet.created_at).format('HH:mm:ss')}</span>
                                            </p>
                                            <p className="tweetText">
                                                {tweet.text}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
            );
        } else {
            return <div />
        }
    }
}

export default Tweets;