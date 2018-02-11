import React, { Component } from "react";
import logo from "./logo.svg";
import NameForm from "./components/forms/GeneralDataForm";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<NameForm />
			</div>
		);
	}
}

export default App;
