import React from "react";
import Footer from "./footer.jsx";

//create your first component
export function Home() {
	let footerTag = (
		<footer className="text-center mt-5">
			<Footer footerContent="Hello I'm the text of the footer" />
		</footer>
	);
	return footerTag;
}
