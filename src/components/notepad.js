

import React from "react";


class Notepad extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {Input : ''}
    }

    handleChange(event) {
        this.setState({Input: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.Input);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2> Notepad </h2>
            <input type="text" onChange={this.handleChange} value={this.state.Input}></input>
            <input type="submit" value="save"/>
        </form>
        );
    }
}

export default Notepad