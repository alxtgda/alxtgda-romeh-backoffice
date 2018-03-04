import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class SectionHeader extends Component {
	render() {
		return (
			<Alert bsStyle="warning">
				Deberás contestar cada una de las preguntas de manera específica y
				completa. Entre más específico seas contestando cada uno de los campos
				solicitados, tu programa personalizado se elaborará con mucho más
				exactitud, ya que conoceré tus actividades y gustos a detalle. De esta
				manera, el resultado es el mismo que como si tuvieras una consulta de
				forma presencial. A partir de la fecha en que enviaste todos los
				requisitos, te enviaré tu plan personalizado de dos a cinco días
				hábiles. Junto con este, adjuntare las recomendaciones generales, así
				como la guía de ejercicios completa, con la descripción de cada uno de
				los ejercicios en tu plan de entrenamiento y cómo ejecutarlo.
				Instrucciones: Al contestar este cuestionario tendré la información
				necesaria para poder evaluar tu condición actual, fijar una meta
				alcanzable y diseñar un plan integral personalizado que permitirá que
				logres tus objetivos. Te recomiendo ser lo más específico posible,
				detallándome muy bien tu estilo de vida; para conocer a fondo tus
				hábitos, actividades diarias y logros que deseas alcanzar.
			</Alert>
		);
	}
}
export default SectionHeader;
