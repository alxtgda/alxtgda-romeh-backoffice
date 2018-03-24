import React, { Component } from "react";
import GeneralDataForm from "./GeneralDataForm";
import firebase from "firebase";

var config = {
	apiKey: "AIzaSyDfuy_aA3C6QpxGMPTgxrloPeQvDYYTDmo",
	authDomain: "romeh-backoffice.firebaseapp.com",
	databaseURL: "https://romeh-backoffice.firebaseio.com",
	projectId: "romeh-backoffice",
	storageBucket: "romeh-backoffice.appspot.com",
	messagingSenderId: "906649784536"
};
firebase.initializeApp(config);

class FormContainer extends Component {
	render() {
		return (
			<div>
				<GeneralDataForm db={firebase} />
			</div>
		);
	}
}
export default FormContainer;
