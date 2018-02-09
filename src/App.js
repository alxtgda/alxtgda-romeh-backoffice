import React, { Component } from "react";
import { Form, Text } from "react-form";
import logo from "./logo.svg";
import "./App.css";

class ExampleForm extends Component {
	render() {
		return (
			<Form>
				{formApi => (
					<form onSubmit={formApi.submitForm} id="form1">
						<label htmlFor="name">Name: </label>
						<Text field="name" id="name" />
						<label htmlFor="lastName">Last Name: </label>
						<Text field="lastName" id="lastName" />
						<button type="submit">Submit</button>
					</form>
				)}
			</Form>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<ExampleForm />
			</div>
		);
	}
}

export default App;
