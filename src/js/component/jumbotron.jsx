import React from "react";
import PropTypes from "prop-types";
import { Button } from "./button.jsx";

export function HeaderJum(props) {
	return (
		<div className="jumbotron mb-3 ml-5 mr-5 mt-5">
			<div className="col-10">
				<h1 className="display-4">{props.topTitle}</h1>
				<p className="lead">{props.text}</p>
				<p className="lead" />
				<Button textButton="See more" classContent="btn btn-lg" />
			</div>
		</div>
	);
}

HeaderJum.propTypes = {
	topTitle: PropTypes.string,
	text: PropTypes.string
};
