import React from "react";
import { Footer } from "./footer.jsx";
import { HeaderJum } from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Button } from "./button.jsx";

//create your first component
export function Home() {
	return (
		<div className="container col-12">
			<HeaderJum topTitle="The Best MakeUp" text="New style of live" />
            <Footer footerContent="Hello I'm the text of the footer" />
		</div>
	);
}
