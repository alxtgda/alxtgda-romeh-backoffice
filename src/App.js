import React, { Component } from "react";
import FormContainer from "./components/forms/FormContainer";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<FormContainer />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
