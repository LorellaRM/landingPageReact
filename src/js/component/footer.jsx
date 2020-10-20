import React from "react";
import PropTypes from "prop-types";

export const Footer = props => {
	let myFooter = <div className="bg-secondary">{props.footerContent}</div>;
	return myFooter;
};

Footer.PropTypes = {
	footerContent: PropTypes.string
};
