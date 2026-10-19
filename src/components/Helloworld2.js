// type rcfc and enter
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Helloworld2 extends Component {
    constructor(props) {
        super(props);

    }

    clickMe() {
        alert('Hello World - from Helloworld2');
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>From class based component</h2>
                <button onClick={this.clickMe}>Click Me</button>
                <button onClick={this.props.clickMe}>Click Me from App</button>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        );
    }
}

Helloworld2.propTypes = {};

export default Helloworld2;