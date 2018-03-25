import React, { Component } from "react";

import {
	ControlLabel,
	Checkbox,
	Form,
	PageHeader,
	FormGroup,
	FormControl,
	Col,
	Button,
	Panel,
	Table
} from "react-bootstrap";
import SectionHeader from "../elements/SectionHeader";
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
			firstQuestionPat: "",
			secondQuestionPat: "",
			thirdQuestionPat: "",
			firstQuestionNp: "",
			secondQuestionNp: "",
			thirdQuestionNp: "",
			sobrepesoPadre: false,
			sobrepesoMadre: false,
			sobrepesoHermanos: false,
			sobrepesoAbuelos: false,
			diabetesPadre: false,
			diabetesMadre: false,
			diabetesHermanos: false,
			diabetesAbuelos: false,
			hipertensPadre: false,
			hipertensMadre: false,
			hipertensHermanos: false,
			hipertensAbuelos: false,
			cardioPadre: false,
			cardioMadre: false,
			cardioHermanos: false,
			cardioAbuelos: false,
			day1Meal01: "",
			day1Meal02: "",
			day1Meal03: "",
			day1Meal04: "",
			day1Meal05: "",
			day1Meal06: "",
			day1Meal07: ""
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
			sobrepesoPadre: this.state.sobrepesoPadre,
			sobrepesoMadre: this.state.sobrepesoMadre,
			sobrepesoHermanos: this.state.sobrepesoHermanos,
			sobrepesoAbuelos: this.state.sobrepesoAbuelos,
			diabetesPadre: this.state.diabetesPadre,
			diabetesMadre: this.state.diabetesMadre,
			diabetesHermanos: this.state.diabetesHermanos,
			diabetesAbuelos: this.state.diabetesAbuelos,
			hipertensPadre: this.state.hipertensPadre,
			hipertensMadre: this.state.hipertensMadre,
			hipertensHermanos: this.state.hipertensHermanos,
			hipertensAbuelos: this.state.hipertensAbuelos,
			cardioPadre: this.state.cardioPadre,
			cardioMadre: this.state.cardioMadre,
			cardioHermanos: this.state.cardioHermanos,
			cardioAbuelos: this.state.cardioAbuelos,
			firstQuestionPat: this.state.firstQuestionPat,
			secondQuestionPat: this.state.secondQuestionPat,
			thirdQuestionPat: this.state.thirdQuestionPat,
			firstQuestionNp: this.state.firstQuestionNp,
			secondQuestionNp: this.state.secondQuestionNp,
			thirdQuestionNp: this.state.thirdQuestionNp,
			day1Meal01: this.state.day1Meal01,
			day1Meal02: this.state.day1Meal02,
			day1Meal03: this.state.day1Meal03,
			day1Meal04: this.state.day1Meal04,
			day1Meal05: this.state.day1Meal05,
			day1Meal06: this.state.day1Meal06,
			day1Meal07: this.state.day1Meal07
		});
		this.setState({
			inputName: "",
			inputLastName: "",
			inputUsrAddress: "",
			inputEmailAddress: "",
			inputUsrProf: "",
			inputUsrJob: "",
			selectUsrAge: "",
			cellNumber: "",
			sobrepesoPadre: false,
			sobrepesoMadre: false,
			sobrepesoHermanos: false,
			sobrepesoAbuelos: false,
			diabetesPadre: false,
			diabetesMadre: false,
			diabetesHermanos: false,
			diabetesAbuelos: false,
			hipertensPadre: false,
			hipertensMadre: false,
			hipertensHermanos: false,
			hipertensAbuelos: false,
			cardioPadre: false,
			cardioMadre: false,
			cardioHermanos: false,
			cardioAbuelos: false,
			firstQuestionPat: "",
			secondQuestionPat: "",
			thirdQuestionPat: "",
			firstQuestionNp: "",
			secondQuestionNp: "",
			thirdQuestionNp: "",
			day1Meal01: "",
			day1Meal02: "",
			day1Meal03: "",
			day1Meal04: "",
			day1Meal05: "",
			day1Meal06: "",
			day1Meal07: ""
		});
		alert("Datos Guardados..");
	};
	handleKeyDown(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
		}
	}
	onChange = e => {
		const state = this.state;
		state[e.target.name] = e.target.checked;
		this.setState(state);
	};
	getValidationState(value) {
		const length = value.length;
		if (length > 0 && length <= 2) return "warning";
		else if (length > 5) return "success";
		else if (length > 0) return "error";
		return null;
	}

	render() {
		const {
			sobrepesoPadre,
			sobrepesoMadre,
			sobrepesoHermanos,
			sobrepesoAbuelos,
			diabetesPadre,
			diabetesMadre,
			diabetesHermanos,
			diabetesAbuelos,
			hipertensPadre,
			hipertensMadre,
			hipertensHermanos,
			hipertensAbuelos,
			cardioPadre,
			cardioMadre,
			cardioHermanos,
			cardioAbuelos
		} = this.state;

		return (
			<div>
				<PageHeader className="App-header">
					ROMEH <small>Datos Generales</small>
				</PageHeader>

				<SectionHeader section="section1" />

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
								<option default value=" ">
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
						<Table responsive hover striped bordered>
							<thead>
								<tr>
									<th>Antecedentes Heredo Familiares</th>
									<th>Padre</th>
									<th>Madre</th>
									<th>Hermanos</th>
									<th>Abuelos</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>Sobrepeso</th>
									<td>
										<Checkbox
											name="sobrepesoPadre"
											value={sobrepesoPadre}
											onChange={this.onChange}
											checked={sobrepesoPadre}
										/>
									</td>
									<td>
										<Checkbox
											name="sobrepesoMadre"
											value={sobrepesoMadre}
											onChange={this.onChange}
											checked={sobrepesoMadre}
										/>
									</td>
									<td>
										<Checkbox
											name="sobrepesoHermanos"
											value={sobrepesoHermanos}
											onChange={this.onChange}
											checked={sobrepesoHermanos}
										/>
									</td>
									<td>
										<Checkbox
											name="sobrepesoAbuelos"
											value={sobrepesoAbuelos}
											onChange={this.onChange}
											checked={sobrepesoAbuelos}
										/>
									</td>
								</tr>
								<tr>
									<th>Diabetes</th>
									<th>
										<Checkbox
											name="diabetesPadre"
											value={diabetesPadre}
											onChange={this.onChange}
											checked={diabetesPadre}
										/>
									</th>
									<th>
										<Checkbox
											name="diabetesMadre"
											value={diabetesMadre}
											onChange={this.onChange}
											checked={diabetesMadre}
										/>
									</th>
									<th>
										<Checkbox
											name="diabetesHermanos"
											value={diabetesHermanos}
											onChange={this.onChange}
											checked={diabetesHermanos}
										/>
									</th>
									<th>
										<Checkbox
											name="diabetesAbuelos"
											value={diabetesAbuelos}
											onChange={this.onChange}
											checked={diabetesAbuelos}
										/>
									</th>
								</tr>
								<tr>
									<th>Hipertensión</th>
									<th>
										<Checkbox
											name="hipertensPadre"
											value={hipertensPadre}
											onChange={this.onChange}
											checked={hipertensPadre}
										/>
									</th>
									<th>
										<Checkbox
											name="hipertensMadre"
											value={hipertensMadre}
											onChange={this.onChange}
											checked={hipertensMadre}
										/>
									</th>
									<th>
										<Checkbox
											name="hipertensHermanos"
											value={hipertensHermanos}
											onChange={this.onChange}
											checked={hipertensHermanos}
										/>
									</th>
									<th>
										<Checkbox
											name="hipertensAbuelos"
											value={hipertensAbuelos}
											onChange={this.onChange}
											checked={hipertensAbuelos}
										/>
									</th>
								</tr>
								<tr>
									<th>Enfermedades Cardiovasculares</th>
									<th>
										<Checkbox
											name="cardioPadre"
											value={cardioPadre}
											onChange={this.onChange}
											checked={cardioPadre}
										/>
									</th>
									<th>
										<Checkbox
											name="cardioMadre"
											value={cardioMadre}
											onChange={this.onChange}
											checked={cardioMadre}
										/>
									</th>
									<th>
										<Checkbox
											name="cardioHermanos"
											value={cardioHermanos}
											onChange={this.onChange}
											checked={cardioHermanos}
										/>
									</th>
									<th>
										<Checkbox
											name="cardioAbuelos"
											value={cardioAbuelos}
											onChange={this.onChange}
											checked={cardioAbuelos}
										/>
									</th>
								</tr>
							</tbody>
						</Table>
					</FormGroup>
					<Panel bsStyle="primary">
						<Panel.Heading>
							<Panel.Title componentClass="h3">
								Antecedentes Patológicos
							</Panel.Title>
						</Panel.Heading>
						<Panel.Body>
							<FormGroup controlId="antecedentesPatologicos">
								<ControlLabel>{questions.p1}</ControlLabel>
								<FormControl
									id="firstQuestionPat"
									style={{ border: "none" }}
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
									style={{ border: "none" }}
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
									style={{ border: "none" }}
									label={questions.p3}
									value={this.state.thirdQuestionPat}
									componentClass="textarea"
									onChange={e =>
										this.setState({ thirdQuestionPat: e.target.value })
									}
									placeholder="Escribe tu Respuesta..."
								/>
							</FormGroup>
						</Panel.Body>
					</Panel>

					<Panel bsStyle="info">
						<Panel.Heading>
							<Panel.Title componentClass="h3">
								Antecedentes No Patológicos
							</Panel.Title>
						</Panel.Heading>
						<Panel.Body>
							<FormGroup controlId="antecedentesNoPatologicos">
								<ControlLabel>{questions.p4}</ControlLabel>
								<FormControl
									id="firstQuestionNp"
									style={{ border: "none" }}
									label={questions.p4}
									value={this.state.firstQuestionNp}
									componentClass="textarea"
									onChange={e =>
										this.setState({ firstQuestionNp: e.target.value })
									}
									placeholder="Escribe tu Respuesta..."
								/>
								<ControlLabel>{questions.p5}</ControlLabel>
								<FormControl
									id="secondQuestionNp"
									style={{ border: "none" }}
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
									style={{ border: "none" }}
									label={questions.p6}
									value={this.state.thirdQuestionNp}
									componentClass="textarea"
									onChange={e =>
										this.setState({ thirdQuestionNp: e.target.value })
									}
									placeholder="Escribe tu Respuesta..."
								/>
							</FormGroup>
						</Panel.Body>
					</Panel>
					<div>
						<strong>Recordatorio de 48 horas</strong>
						<SectionHeader section="section2" />
						<FormGroup>
							<Table responsive hover striped bordered>
								<thead>
									<tr>
										<th>COMIDA Y HORARIO</th>
										<th>PLATILLO</th>
										<th>INGREDIENTES Y CANTIDADES</th>
										<th>BEBIDAS INGERIDAS Y CANTIDAD</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<FormControl
												id="day1Meal01"
												style={{ border: "none" }}
												value={this.state.day1Meal01}
												componentClass="textarea"
												onChange={e =>
													this.setState({ day1Meal01: e.target.value })
												}
											/>
										</td>
										<td />
										<td />
										<td />
									</tr>
									<tr>
										<td>
											<FormControl
												id="day1Meal02"
												style={{ border: "none" }}
												value={this.state.day1Meal02}
												componentClass="textarea"
												onChange={e =>
													this.setState({ day1Meal02: e.target.value })
												}
											/>
										</td>
										<td />
										<td />
										<td />
									</tr>
									<tr>
										<td>
											<FormControl
												id="day1Meal03"
												style={{ border: "none" }}
												value={this.state.day1Meal03}
												componentClass="textarea"
												onChange={e =>
													this.setState({ day1Meal03: e.target.value })
												}
											/>
										</td>
										<td />
										<td />
										<td />
									</tr>
									<tr>
										<td>
											<FormControl
												id="day1Meal04"
												style={{ border: "none" }}
												value={this.state.day1Meal04}
												componentClass="textarea"
												onChange={e =>
													this.setState({ day1Meal04: e.target.value })
												}
											/>
										</td>
										<td />
										<td />
										<td />
									</tr>
									<tr>
										<td>
											<FormControl
												id="day1Meal05"
												style={{ border: "none" }}
												value={this.state.day1Meal05}
												componentClass="textarea"
												onChange={e =>
													this.setState({ day1Meal05: e.target.value })
												}
											/>
										</td>
										<td />
										<td />
										<td />
									</tr>
									<tr>
										<td>
											<FormControl
												id="day1Meal06"
												style={{ border: "none" }}
												value={this.state.day1Meal06}
												componentClass="textarea"
												onChange={e =>
													this.setState({ day1Meal06: e.target.value })
												}
											/>
										</td>
										<td />
										<td />
										<td />
									</tr>
									<tr>
										<td>
											<FormControl
												id="day1Meal07"
												style={{ border: "none" }}
												value={this.state.day1Meal07}
												componentClass="textarea"
												onChange={e =>
													this.setState({ day1Meal07: e.target.value })
												}
											/>
										</td>
										<td />
										<td />
										<td />
									</tr>
								</tbody>
							</Table>
						</FormGroup>
					</div>

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
