import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
	return (
		<div className="about">
			<div
				className="aboutTop"
				style={{ backgroundImage: `url(${MultiplePizzas})` }}
			></div>
			<div className="aboutBottom">
				<h1> About us</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor
					at risus viverra. Pellentesque massa placerat duis ultricies lacus sed
					turpis. Hac habitasse platea dictumst vestibulum rhoncus est
					pellentesque elit. Sodales ut eu sem integer vitae justo eget magna
					fermentum. Risus viverra adipiscing at in tellus integer feugiat
					scelerisque varius. Et tortor at risus viverra adipiscing at. Ut sem
					nulla pharetra diam sit amet nisl suscipit adipiscing. Facilisis
					gravida neque convallis a cras semper. Elementum tempus egestas sed
					sed.
				</p>
			</div>
		</div>
	);
}

export default About;
