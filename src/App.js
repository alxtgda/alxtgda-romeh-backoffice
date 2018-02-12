import React, { Component } from "react";
import NameForm from "./components/forms/GeneralDataForm";
import "./App.css";
import firebase from "firebase";

class App extends Component {
	constructor(props) {
		super(props);
		var config = {
			apiKey: "AIzaSyDfuy_aA3C6QpxGMPTgxrloPeQvDYYTDmo",
			authDomain: "romeh-backoffice.firebaseapp.com",
			databaseURL: "https://romeh-backoffice.firebaseio.com",
			projectId: "romeh-backoffice",
			storageBucket: "romeh-backoffice.appspot.com",
			messagingSenderId: "906649784536"
		};
		firebase.initializeApp(config);
	}
	render() {
		return (
			<div>
				<NameForm db={firebase} label="Nombre: " />
			</div>
		);
	}
}

export default App;
