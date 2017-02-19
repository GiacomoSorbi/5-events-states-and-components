import React, { Component } from 'react';
import Circle from './Circle.js';
import './App.css';

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfCircles: 0
        }
    }

    handleInputChange(e) {
        this.setState({
            numberOfCircles: e.target.value
        });
    }

    render() {
        const numberOfCircles = Array.from({length: this.state.numberOfCircles}, (x, i) => <Circle key={`circle-${i}`} />)
        return (
            <div>
                <div>
                    <input type="text" onChange={this.handleInputChange.bind(this)} value={this.state.numberOfCircles || ''}/>
                </div>
                <div className="container">
                    {numberOfCircles}
                </div>
            </div>
        );
    }
}

export default Container;