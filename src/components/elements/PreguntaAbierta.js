import React, { Component } from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

class PreguntaAbierta extends Component {
	render() {
		return (
			<div>
				<FormGroup controlId={this.props.id}>
					<ControlLabel>{this.props.label}</ControlLabel>
					<FormControl
						componentClass="textarea"
						placeholder={this.props.placeholder}
					/>
				</FormGroup>
			</div>
		);
	}
}
export default PreguntaAbierta;
