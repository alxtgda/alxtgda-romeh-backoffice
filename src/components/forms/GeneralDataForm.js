import React, { Component } from "react";
import SingleInput from "../elements/SingleInput";
import {
	Form,
	PageHeader,
	FormGroup,
	FormControl,
	Col,
	Button
} from "react-bootstrap";

class NameForm extends Component {
	constructor() {
		super();
		this.state = {
			inputName: "",
			inputLastName: "",
			inputUsrAddress: "",
			inputEmailAddress: "",
			inputUsrProf: "",
			inputUsrJob: "",
			inputTerms: false
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		let dbCon = this.props.db.database().ref("/users");
		dbCon.push({
			name: this.state.inputName,
			lastName: this.state.inputLastName,
			usrAddress: this.state.inputUsrAddress,
			usrEmail: this.state.inputEmailAddress,
			usrProf: this.state.inputUsrProf,
			usrJob: this.state.inputUsrJob,
			accTerms: this.state.inputTerms
		});
		this.setState({
			inputName: "",
			inputLastName: "",
			inputUsrAddress: "",
			inputEmailAddress: "",
			inputUsrProf: "",
			inputUsrJob: "",
			inputTerms: false
		});
	};
	handleChange = e => {
		this.setState({ inputTerms: e.target.checked });
	};

	render() {
		return (
			<div>
				<PageHeader className="App-header">
					ROMEH <small>Datos Generales</small>
				</PageHeader>
				<Form horizontal onSubmit={this.handleSubmit}>
					<FormGroup controlId="name">
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

					<FormGroup controlId="lastName">
						<Col componentClass="lastName" sm={1}>
							Apellido:
						</Col>
						<Col sm={5}>
							<FormControl
								id="lastName"
								type="text"
								onChange={e => this.setState({ inputLastName: e.target.value })}
								placeholder="Apellido..."
								value={this.state.inputLastName}
							/>
						</Col>
					</FormGroup>

					<FormGroup controlId="usrAge">
						<Col componentClass="usrAge" sm={1}>
							Edad:
						</Col>
						<Col sm={5}>
							<FormControl componentClass="select" placeholder="Edad..">
								<option value=" ">Selecciona tu Edad..</option>
								<option value="1">10</option>
								<option value="2">20</option>
							</FormControl>
						</Col>
					</FormGroup>
					<FormGroup controlId="usrAddress">
						<Col componentClass="usrAddress" sm={1}>
							Domicilio:
						</Col>
						<Col sm={5}>
							<FormControl
								id="usrAddress"
								type="textarea"
								cols="50"
								onChange={e =>
									this.setState({ inputUsrAddress: e.target.value })
								}
								placeholder="Dirección Completa"
								value={this.state.inputUsrAddress}
							/>
						</Col>
					</FormGroup>

					<FormGroup controlId="usrProf">
						<Col componentClass="usrProf" sm={1}>
							Profesión:
						</Col>
						<Col sm={5}>
							<FormControl
								id="usrProf"
								type="text"
								onChange={e => this.setState({ inputUsrProf: e.target.value })}
								placeholder="Profesión.."
								value={this.state.inputUsrProf}
							/>
						</Col>
					</FormGroup>

					<FormGroup controlId="usrJob">
						<Col componentClass="usrJob" sm={1}>
							Ocupación:
						</Col>
						<Col sm={5}>
							<FormControl
								id="usrJob"
								type="text"
								onChange={e => this.setState({ inputUsrJob: e.target.value })}
								placeholder="Ocupación.."
								value={this.state.inputUsrJob}
							/>
						</Col>
					</FormGroup>

					<FormGroup controlId="usrEmail">
						<Col componentClass="usrEmail" sm={1}>
							Email:
						</Col>
						<Col sm={5}>
							<FormControl
								id="usrEmail"
								type="email"
								onChange={e =>
									this.setState({ inputEmailAddress: e.target.value })
								}
								placeholder="email@mail.com"
								value={this.state.inputEmailAddress}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col componentClass="accTerms" sm={3}>
							Acepto Términos y Condiciones..
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

					<FormGroup controlId="pruebaCompo">
						<Col componentClass="pruebaCompo" sm={3}>
							Pro
						</Col>
						<Col sm={5}>
							<SingleInput type="number" />
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={1} sm={10}>
							<Button type="submit" bsStyle="primary">
								Enviar..
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default NameForm;
