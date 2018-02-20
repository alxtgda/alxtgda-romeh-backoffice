import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

class SingleInput extends Component {
	render(props) {
		return <FormControl type={this.props.type} placeholder="Large text" />;
	}
}
export default SingleInput;
