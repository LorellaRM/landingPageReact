import React from "react";
import { Navbar } from "./navbar.jsx";
import { HeaderJum } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";
import { Button } from "./button.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar
				navbarName="MYMAKEUP"
				urlNB=""
				url1="https://www.kikocosmetics.com/es-es/promo-kiko/gift-with-purchase-oct-2020.html"
				url2=""
				url3=""
				urlHome=""
				home="NEWS"
				opt1="SALES"
				opt2="CONTACT"
				opt3="ABOUT US"
			/>
			<HeaderJum
				topTitle="Your favorite make-up web"
				text="Watch our latest news"
			/>
			<Cards />
			<Footer />
		</div>
	);
}
