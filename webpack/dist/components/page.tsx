import * as React from "react";

import Header from './header';
import Tweets from './tweets';

require('../sass/style.scss');

interface properties {}

class Page extends React.Component<properties, {}> {
    render() {
        var names = ["#Office365", "#SharePoint", "JavaScript"];

        return (
            <div className="ms-Grid">
                <Header names={names} />
                <Tweets />
            </div>
        );
    }
}

export default Page;