import React from "react";
import PropTypes from "prop-types";

export function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg">
			<a className="navbar-brand" href={props.urlNB}>
				{props.navbarName}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a
						className="nav-item nav-link active"
						href={props.urlHome}>
						{props.home} <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href={props.url1}>
						{props.opt1}
					</a>
					<a className="nav-item nav-link" href={props.url2}>
						{props.opt2}
					</a>
					<a className="nav-item nav-link" href={props.url3}>
						{props.opt3}
					</a>
				</div>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	navbarName: PropTypes.string,
	urlNB: PropTypes.string,
	url1: PropTypes.string,
	url2: PropTypes.string,
	url3: PropTypes.string,
	urlHome: PropTypes.string,
	home: PropTypes.string,
	opt1: PropTypes.string,
	opt2: PropTypes.string,
	opt3: PropTypes.string
};
