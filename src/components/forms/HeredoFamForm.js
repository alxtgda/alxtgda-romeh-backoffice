import React, { Component } from "react";
import { FormGroup, Checkbox, Table } from "react-bootstrap";

class HeredoFam extends Component {
	constructor() {
		super();
		this.state = {
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
			cardioAbuelos: false
		};
	}
	handleChange = e => {
		const state = this.state;
		state[e.target.name] = e.target.checked;
		this.setState(state);
	};

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
				<FormGroup>
					<Table responsive hover striped bordered>
						<thead>
							<th>Antecedentes Heredo Familiares</th>
							<th>Padre</th>
							<th>Madre</th>
							<th>Hermanos</th>
							<th>Abuelos</th>
						</thead>
						<tbody>
							<tr>
								<th>Sobrepeso</th>
								<td>
									<Checkbox
										name="sobrepesoPadre"
										value={sobrepesoPadre}
										onChange={this.handleChange}
										checked={sobrepesoPadre}
									/>
								</td>
								<td>
									<Checkbox
										name="sobrepesoMadre"
										value={sobrepesoMadre}
										onChange={this.handleChange}
										checked={sobrepesoMadre}
									/>
								</td>
								<td>
									<Checkbox
										name="sobrepesoHermanos"
										value={sobrepesoHermanos}
										onChange={this.handleChange}
										checked={sobrepesoHermanos}
									/>
								</td>
								<td>
									<Checkbox
										name="sobrepesoAbuelos"
										value={sobrepesoAbuelos}
										onChange={this.handleChange}
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
										onChange={this.handleChange}
										checked={diabetesPadre}
									/>
								</th>
								<th>
									<Checkbox
										name="diabetesMadre"
										value={diabetesMadre}
										onChange={this.handleChange}
										checked={diabetesMadre}
									/>
								</th>
								<th>
									<Checkbox
										name="diabetesHermanos"
										value={diabetesHermanos}
										onChange={this.handleChange}
										checked={diabetesHermanos}
									/>
								</th>
								<th>
									<Checkbox
										name="diabetesAbuelos"
										value={diabetesAbuelos}
										onChange={this.handleChange}
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
										onChange={this.handleChange}
										checked={hipertensPadre}
									/>
								</th>
								<th>
									<Checkbox
										name="hipertensMadre"
										value={hipertensMadre}
										onChange={this.handleChange}
										checked={hipertensMadre}
									/>
								</th>
								<th>
									<Checkbox
										name="hipertensHermanos"
										value={hipertensHermanos}
										onChange={this.handleChange}
										checked={hipertensHermanos}
									/>
								</th>
								<th>
									<Checkbox
										name="hipertensAbuelos"
										value={hipertensAbuelos}
										onChange={this.handleChange}
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
										onChange={this.handleChange}
										checked={cardioPadre}
									/>
								</th>
								<th>
									<Checkbox
										name="cardioMadre"
										value={cardioMadre}
										onChange={this.handleChange}
										checked={cardioMadre}
									/>
								</th>
								<th>
									<Checkbox
										name="cardioHermanos"
										value={cardioHermanos}
										onChange={this.handleChange}
										checked={cardioHermanos}
									/>
								</th>
								<th>
									<Checkbox
										name="cardioAbuelos"
										value={cardioAbuelos}
										onChange={this.handleChange}
										checked={cardioAbuelos}
									/>
								</th>
							</tr>
						</tbody>
					</Table>
				</FormGroup>
			</div>
		);
	}
}
export default HeredoFam;
