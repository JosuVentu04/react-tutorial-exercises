import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Hero = (props) => {
	// Here you have to return expected html using the properties being passed to the component
	return (
		<div className="Presentation">
			<div className="presentation-body">
				<h2 className="Presentation-title">{props.title}</h2>
				<p className="-Presentation-Description">{props.description}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Hero.propTypes = {
	// PropTypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

ReactDOM.render(
	<Hero
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
