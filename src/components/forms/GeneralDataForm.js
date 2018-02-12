import React, { Component } from "react";
import { Form, Text } from "react-form";

class NameForm extends Component {
	render() {
		return (
			<div>
				<Form>
					{formApi => (
						<form onSubmit={formApi.submitForm} id="nameForm">
							<label htmlFor="name">Name: </label>
							<Text field="name" id="name" />
							<label htmlFor="lastName">Last Name: </label>
							<Text field="lastName" id="lastName" />
							<button type="submit">Submit</button>
						</form>
					)}
				</Form>
			</div>
		);
	}
}
export default NameForm;
