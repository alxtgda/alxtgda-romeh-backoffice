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
						<label htmlFor="hello">Hello World</label>
						<Text field="hello" id="hello" />
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
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<ExampleForm />
			</div>
		);
	}
}

export default App;
