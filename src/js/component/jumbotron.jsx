import React from "react";
import PropTypes from "prop-types";

export function HeaderJum(props) {
	return (
		<div className="jumbotron mt-5">
			<div className="col-10 row">
				<h1 className="display-4">{props.topTitle}</h1>
				<p className="lead">{props.text}</p>
				<p className="lead" />
			</div>
		</div>
	);
}

HeaderJum.propTypes = {
	topTitle: PropTypes.string,
	text: PropTypes.string
};
