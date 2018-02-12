import React, { Component } from "react";

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			value: ""
		};
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	handleSubmit(e) {
		alert("A name was submitted: " + this.state.value);
		e.preventDefault();
		let dbCon = this.props.db.database().ref("/names");
		dbCon.push({
			name: this.state.value
		});
		this.setState({
			value: ""
		});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<div>
						<label>{this.props.label}</label>
					</div>
					<input
						name="firstName"
						type="text"
						placeholder="Escribe tu Nombre.."
						onChange={this.handleChange}
						value={this.state.value}
					/>
				</div>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
export default NameForm;
