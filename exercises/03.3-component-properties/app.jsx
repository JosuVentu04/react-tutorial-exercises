import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) Replace the hard-coded image, description, link, etc. With their property variable
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageURL} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.Description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	imageURL: PropType.string,
	Description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,

	// 2) Add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<BootstrapCard
		title={"Bob Dylan"}
		imageURL={"https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"}
		Description={"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."}
		buttonUrl={"https://en.wikipedia.org/wiki/Bob_Dylan"}
		buttonLabel={"Go to wikipedia"}
	/>,
	document.querySelector("#myDiv")
);
