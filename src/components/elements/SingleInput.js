import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

class SingleInput extends Component {
	constructor() {
		super();
		this.state = {
			inputPrueba: ""
		};
	}
	handleSubmit = e => {
		e.preventDefault();
	};
	render(props) {
		return (
			<FormControl
				id={this.props.id}
				type={this.props.type}
				placeholder={this.props.placeholder}
				value={this.state.inputPrueba}
				onChange={e => this.setState({ inputPrueba: e.target.value })}
			/>
		);
	}
}
export default SingleInput;
