import firebase from "firebase";
var config = {
	apiKey: "AIzaSyDfuy_aA3C6QpxGMPTgxrloPeQvDYYTDmo",
	authDomain: "romeh-backoffice.firebaseapp.com",
	databaseURL: "https://romeh-backoffice.firebaseio.com",
	projectId: "romeh-backoffice",
	storageBucket: "romeh-backoffice.appspot.com",
	messagingSenderId: "906649784536"
};
var fire = firebase.initializeApp(config);
export default fire;
