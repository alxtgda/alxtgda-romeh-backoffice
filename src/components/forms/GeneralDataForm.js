import React, { Component } from "react";

import {
	Form,
	PageHeader,
	FormGroup,
	FormControl,
	Col,
	Button
} from "react-bootstrap";
import SectionHeader from "../elements/SectionHeader";
import MaskedFormControl from "react-bootstrap-maskedinput";

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputName: "",
			inputLastName: "",
			inputUsrAddress: "",
			inputEmailAddress: "",
			inputUsrProf: "",
			inputUsrJob: "",
			selectUsrAge: "",
			cellNumber: "",
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
			usrAge: this.state.selectUsrAge,
			cellNumber: this.state.cellNumber,
			accTerms: this.state.inputTerms
		});
		this.setState({
			inputName: "",
			inputLastName: "",
			inputUsrAddress: "",
			inputEmailAddress: "",
			inputUsrProf: "",
			inputUsrJob: "",
			selectUsrAge: " ",
			cellNumber: "",
			inputTerms: false,
			inputPrueba: ""
		});
		alert("Datos Guardados..");
	};
	handleKeyDown(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
		}
	}
	onChange = e => {
		this.setState({
			inputTerms: e.target.checked
		});
	};
	getValidationState(value) {
		const length = value.length;
		if (length > 0 && length <= 5) return "warning";
		else if (length > 5) return "success";
		else if (length === 0) return "error";
		return null;
	}

	render() {
		return (
			<div>
				<PageHeader className="App-header">
					ROMEH <small>Datos Generales</small>
				</PageHeader>

				<SectionHeader />

				<Form
					horizontal
					onSubmit={this.handleSubmit}
					onKeyDown={this.handleKeyDown}
				>
					<FormGroup
						controlId="name"
						validationState={this.getValidationState(this.state.inputName)}
					>
						<Col componentClass="name" sm={2}>
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
							<FormControl.Feedback />
						</Col>
					</FormGroup>

					<FormGroup
						controlId="lastName"
						validationState={this.getValidationState(this.state.inputName)}
					>
						<Col componentClass="lastName" sm={2}>
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
							<FormControl.Feedback />
						</Col>
					</FormGroup>

					<FormGroup controlId="usrAge">
						<Col componentClass="usrAge" sm={2}>
							Edad:
						</Col>
						<Col sm={5}>
							<FormControl
								id="usrAge"
								componentClass="select"
								placeholder="Edad.."
								value={this.state.value}
								onChange={e => this.setState({ selectUsrAge: e.target.value })}
							>
								<option selected value=" ">
									Selecciona tu Edad..
								</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
							</FormControl>
						</Col>
					</FormGroup>
					<FormGroup
						controlId="usrAddress"
						validationState={this.getValidationState(this.state.inputName)}
					>
						<Col componentClass="usrAddress" sm={2}>
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
						<Col componentClass="usrProf" sm={2}>
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
						<Col componentClass="usrJob" sm={2}>
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
						<Col componentClass="usrEmail" sm={2}>
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

					<FormGroup controlId="cellNumber">
						<Col componentClass="cellNumber" sm={2}>
							Celular (WhatsApp):
						</Col>
						<Col sm={5}>
							<MaskedFormControl
								type="text"
								id="cellNumber"
								mask="(11) 1111 1111"
								onChange={e => this.setState({ cellNumber: e.target.value })}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col componentClass="AccTerms" sm={2}>
							Acepto Términos y Condiciones..
						</Col>
						<Col sm={2}>
							<FormControl
								id="AccTerms"
								type="checkbox"
								onChange={this.onChange}
								checked={this.state.inputTerms}
								value={this.state.inputTerms}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={1} sm={10}>
							<Button type="submit" bsStyle="primary">
								Siguiente ->
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default NameForm;
