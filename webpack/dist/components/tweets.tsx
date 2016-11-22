import * as React from "react";
import * as io from 'socket.io-client';
import * as moment from 'moment';

const socket = io('http://localhost:80');

interface properties {}

interface componentState {
    tweets: any
}

class Tweets extends React.Component<properties, componentState> {
    private tweets: any[] = [];

    constructor () {
        super();

        // Set initial state
        this.state = {
            tweets: []
        };

        socket.on('tweet', (tweet: any) => {
            this.tweets.unshift(tweet);

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
                        this.state.tweets.map((tweet: any, index: number) => {
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