import Gradient from '../Pictures/Gradient.png'
import React from 'react'

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleBackground: {
                backgroundImage: 'url(' + Gradient + ')',
                backgroundSize: '100% 100%',
                // backgroundAttachment: 'fixed'
                width: '100%',
                height: 300
            },
        }
    }

    render() {
        return (
            <div id={"title-container"} style={this.state.titleBackground}>
                <p> Hello, my name is </p>
                <br/>
                <h1 id={"name"}> Andrew Jones </h1>
            </div>
        );
    }
}

export default Title;