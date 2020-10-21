import React from "react";
import { Cards } from "./cards.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Button } from "./button.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<Cards />
		</div>
	);
}
