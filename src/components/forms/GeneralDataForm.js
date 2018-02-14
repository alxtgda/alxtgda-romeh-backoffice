import React, { Component } from "react";

class NameForm extends Component {
	constructor() {
		super();
		this.state = {
			inputName: "",
			inputLastName: "",
			inputTerms: false
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		let dbCon = this.props.db.database().ref("/names");
		dbCon.push({
			name: this.state.inputName,
			lastName: this.state.inputLastName,
			accTerms: this.state.inputTerms
		});
		this.setState({
			inputName: "",
			inputLastName: "",
			inputTerms: false
		});
		console.log(this.state);
	};
	handleChange = (e) => {
		this.setState({ inputTerms: e.target.checked });
	}
	
	render() {
		return (
			<div>
				<h4>Datos Generales</h4>
				<form onSubmit={this.handleSubmit}>
					<p>
						<label htmlFor="name">Nombre: </label>
						<input
							id="name"
							name="userName"
							onChange={e => this.setState({ inputName: e.target.value })}
							placeholder="Introduce tu nombre"
							value={this.state.inputName}
						/>
					</p>

					<p>
						<label htmlFor="lastName">Apellido Materno: </label>
						<input
							id="lastName"
							name="lastName"
							onChange={e => this.setState({ inputLastName: e.target.value })}
							placeholder="Introduce tu Apellido Materno"
							value={this.state.inputLastName}
						/>
					</p>

					<p>
						<label>
							<input
								checked={this.state.inputTerms}
								onChange={this.handleChange}
								type="checkbox"
							/>
							Accepted Terms
						</label>
					</p>

					<button>Enviar..</button>
				</form>
			</div>
		);
	}
}

export default NameForm;
