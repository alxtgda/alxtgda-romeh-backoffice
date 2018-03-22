import React, { Component } from "react";

import {
	ControlLabel,
	Form,
	PageHeader,
	FormGroup,
	FormControl,
	Col,
	Button,
	Navbar
} from "react-bootstrap";
import SectionHeader from "../elements/SectionHeader";
import PreguntaAbierta from "../elements/PreguntaAbierta";
import MaskedFormControl from "react-bootstrap-maskedinput";

const questions = {
	p1:
		"¿Padece alguna enfermedad, toma algún medicamento prescrito por su médico?, en caso de ser su respuesta afirmativa mencionar cuál es y la razón de usarlo.",
	p2:
		"¿Padece algún síntoma gastrointestinal como agruras, gastritis, reflujo, colitis, estreñimiento?",
	p3:
		"¿Ha tenido alguna lesión en músculos o articulaciones?, en caso de que su respuesta sea si, ¿fue tratada de manera correcta por el especialista? ¿Tiene alguna recomendación actual del médico tratante?",
	p4:
		"¿Acostumbra Fumar? En caso de ser su respuesta afirmativa mencionar cantidad a la semana.",
	p5:
		"¿Acostumbra tomar bebidas alcohólicas? En caso de ser su respuesta afirmativa mencionar cantidad a la semana.",
	p6:
		"¿Has usado o usas cualquier tipo de suplementos alimenticios (ejemplo: vitaminas,omega3, proteína, aminoácidos, etc.)?"
};
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
			inputTerms: false,
			firstQuestionPat: "",
			secondQuestionPat: "",
			thirdQuestionPat: "",
			firstQuestionNp: "",
			secondQuestionNp: "",
			thirdQuestionNp: ""
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
			accTerms: this.state.inputTerms,
			firstQuestionPat: this.state.firstQuestionPat,
			secondQuestionPat: this.state.secondQuestionPat,
			thirdQuestionPat: this.state.thirdQuestionPat,
			firstQuestionNp: this.state.firstQuestionNp,
			secondQuestionNp: this.state.secondQuestionNp,
			thirdQuestionNp: this.state.thirdQuestionNp
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
			firstQuestionPat: "",
			secondQuestionPat: "",
			thirdQuestionPat: "",
			firstQuestionNp: "",
			secondQuestionNp: "",
			thirdQuestionNP: ""
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
		if (length > 0 && length <= 2) return "warning";
		else if (length > 5) return "success";
		else if (length > 0) return "error";
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
						validationState={this.getValidationState(this.state.inputLastName)}
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
						validationState={this.getValidationState(
							this.state.inputUsrAddress
						)}
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

					<FormGroup
						controlId="usrProf"
						validationState={this.getValidationState(this.state.inputUsrProf)}
					>
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

					<FormGroup
						controlId="usrJob"
						validationState={this.getValidationState(this.state.inputUsrJob)}
					>
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

					<FormGroup
						controlId="usrEmail"
						validationState={this.getValidationState(
							this.state.inputEmailAddress
						)}
					>
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

					<FormGroup
						controlId="cellNumber"
						validationState={this.getValidationState(this.state.cellNumber)}
					>
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
					<Navbar>
						<Navbar.Text>
							<strong>Antecedentes Patológicos</strong>
						</Navbar.Text>
					</Navbar>
					<FormGroup controlId="antecedentesPatologicos">
						<ControlLabel>{questions.p1}</ControlLabel>
						<FormControl
							id="firstQuestionPat"
							label={questions.p1}
							value={this.state.firstQuestionPat}
							componentClass="textarea"
							onChange={e =>
								this.setState({ firstQuestionPat: e.target.value })
							}
							placeholder="Escribe tu Respuesta..."
						/>
						<ControlLabel>{questions.p2}</ControlLabel>
						<FormControl
							id="secondQuestionPat"
							label={questions.p2}
							value={this.state.secondQuestionPat}
							componentClass="textarea"
							onChange={e =>
								this.setState({ secondQuestionPat: e.target.value })
							}
							placeholder="Escribe tu Respuesta..."
						/>
						<ControlLabel>{questions.p3}</ControlLabel>
						<FormControl
							id="thirdQuestionPat"
							label={questions.p3}
							value={this.state.thirdQuestionPat}
							componentClass="textarea"
							onChange={e =>
								this.setState({ thirdQuestionPat: e.target.value })
							}
							placeholder="Escribe tu Respuesta..."
						/>
					</FormGroup>
					<Navbar>
						<Navbar.Text>
							<strong>Antecedentes No Patológicos</strong>
						</Navbar.Text>
					</Navbar>
					<FormGroup controlId="antecedentesNoPatologicos">
						<ControlLabel>{questions.p4}</ControlLabel>
						<FormControl
							id="firstQuestionNp"
							label={questions.p4}
							value={this.state.firstQuestionNp}
							componentClass="textarea"
							onChange={e => this.setState({ firstQuestionNp: e.target.value })}
							placeholder="Escribe tu Respuesta..."
						/>
						<ControlLabel>{questions.p5}</ControlLabel>
						<FormControl
							id="secondQuestionNp"
							label={questions.p5}
							value={this.state.secondQuestionNp}
							componentClass="textarea"
							onChange={e =>
								this.setState({ secondQuestionNp: e.target.value })
							}
							placeholder="Escribe tu Respuesta..."
						/>
						<ControlLabel>{questions.p6}</ControlLabel>
						<FormControl
							id="thirdQuestionNp"
							label={questions.p6}
							value={this.state.thirdQuestionNp}
							componentClass="textarea"
							onChange={e => this.setState({ thirdQuestionNp: e.target.value })}
							placeholder="Escribe tu Respuesta..."
						/>
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
