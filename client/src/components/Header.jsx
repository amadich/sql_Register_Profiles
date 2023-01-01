import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return(
            <header>
                <ul>
                    <li style={{color: "limegreen"}}>Home</li>
                    <li>About</li>
                </ul><hr />
            </header>

        )
    }
}