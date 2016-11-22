import * as React from "react";

interface properties {
    names: string[];
}

class Header extends React.Component<properties, {}> {
    render() {
        return (
            <h1 className="ms-font-xl">Show tweets about:&nbsp;
            {
                this.props.names.map((name, index) => {
                    return (
                        <b key={index}>{name}</b>
                    );
                })
            }
            </h1>
        );
    }
}

export default Header;