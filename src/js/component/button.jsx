import React from "react";
import PropTypes from "prop-types";

export const Button = props => {
	let myButton = <button className={props.classContent}>{props.textButton}</button>;
	return myButton;
};

Button.PropTypes = {
	textButton: PropTypes.string,
	classContent: PropTypes.string
};
