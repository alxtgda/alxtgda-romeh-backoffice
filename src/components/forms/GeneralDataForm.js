import React, { Component } from "react";
import { Form, FormGroup, FormControl, Col, Button } from "react-bootstrap";

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
	handleChange = e => {
		this.setState({ inputTerms: e.target.checked });
	};

	render() {
		return (
			<div>
				<h4>Datos Generales</h4>
				<Form horizontal onSubmit={this.handleSubmit}>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass="name" sm={1}>
							Nombre:
						</Col>
						<Col sm={5}>
							<FormControl
								id="name"
								type="text"
								onChange={e => this.setState({ inputName: e.target.value })}
								placeholder="Tu Nombre.."
								value={this.state.inputName}
							/>
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalLastName">
						<Col componentClass="lastName" sm={1}>
							Apellido:
						</Col>
						<Col sm={5}>
							<FormControl
								id="lastName"
								type="text"
								onChange={e => this.setState({ inputLastName: e.target.value })}
								placeholder="Apellido Materno.."
								value={this.state.inputLastName}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col componentClass="accTerms" sm={1}>
							Aceptas Términos y Condiciones..
						</Col>
						<Col sm={1}>
							<FormControl
								id="accTerms"
								type="checkbox"
								onChange={this.handleChange}
								checked={this.state.inputTerms}
								value={this.state.inputTerms}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit">Enviar..</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default NameForm;
