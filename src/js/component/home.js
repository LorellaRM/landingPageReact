import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.jsx";

//create your first component
export function Home() {
	return (
		<div className="container-fluid p-0">
			<Navbar
				navbarName="MakeUP"
				urlNB=""
				url1="https://www.kikocosmetics.com/es-es/promo-kiko/gift-with-purchase-oct-2020.html"
				url2=""
				url3=""
				urlHome=""
				home="Home"
				opt1="Option 1"
				opt2="Oprion 2"
				opt3="Oprion 3"
			/>
		</div>
	);
}
