import React from "react";
import { HeaderJum } from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container col-12">
			<HeaderJum topTitle="The Best MakeUp" text="New style of live" />
		</div>
	);
}
