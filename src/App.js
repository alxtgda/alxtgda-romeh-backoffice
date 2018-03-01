import React, { Component } from "react";
import NameForm from "./components/forms/GeneralDataForm";
import HeredoFamForm from "./components/forms/HeredoFamForm";
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
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<NameForm db={firebase} label="Nombre: " />
					</div>
					<div className="col-sm-12">
						<HeredoFamForm />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
