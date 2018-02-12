import React, { Component } from "react";
import logo from "./logo.svg";
import NameForm from "./components/forms/GeneralDataForm";
import "./App.css";
import fire from "./firebase";

class App extends Component {
	constructor() {
		super();
		this.state = {
			speed: 10
		};
	}

	componentDidMount() {
		//creando referencia a la base de datos
		const rootRef = fire
			.database()
			.ref()
			.child("react");
		const speedRef = rootRef.child("speed");
		speedRef.on("value", snap => {
			this.setState({
				speed: snap.val()
			});
		});
		// this.setState({
		// 	speed: 25
		// });
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<NameForm />
				<h1>{this.state.speed}</h1>
			</div>
		);
	}
}

export default App;
