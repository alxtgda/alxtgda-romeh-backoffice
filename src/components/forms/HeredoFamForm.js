import React, { Component } from "react";
import { FormGroup, Checkbox, Table } from "react-bootstrap";

class HeredoFam extends Component {
	constructor() {
		super();
		this.state = {
			sobrepesoPadre: false,
			sobrepesoMadre: false
		};
	}
	handleChange = e => {
		this.setState({
			sobrepesoPadre: e.target.checked,
			sobrepesoMadre: e.target.checked
		});
	};

	render() {
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
										id="sobrepesoPadre"
										onChange={this.handleChange.bind(this)}
										checked={this.state.sobrepesoPadre}
										value={this.state.sobrepesoPadre}
									/>
								</td>
								<td>
									<Checkbox
										id="sobrepesoMadre"
										onChange={this.handleChange.bind(this)}
										checked={this.state.sobrepesoMadre}
										value={this.state.sobrepesoMadre}
									/>
								</td>
								<td>
									<Checkbox />
								</td>
								<td>
									<Checkbox />
								</td>
							</tr>
							<tr>
								<th>Diabetes</th>
								<th>
									<Checkbox />
								</th>
								<th>
									<Checkbox />
								</th>
								<th>
									<Checkbox />
								</th>
								<th>
									<Checkbox />
								</th>
							</tr>
							<tr>
								<th>Hipertensión</th>
								<th>
									<Checkbox />
								</th>
								<th>
									<Checkbox />
								</th>
								<th>
									<Checkbox />
								</th>
								<th>
									<Checkbox />
								</th>
							</tr>
							<tr>
								<th>Enfermedades Cardiovasculares</th>
								<th>
									<Checkbox />
								</th>
								<th>
									<Checkbox />
								</th>
								<th>
									<Checkbox />
								</th>
								<th>
									<Checkbox />
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
