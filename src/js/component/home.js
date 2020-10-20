import React from "react";
import { Footer } from "./footer.jsx";

//create your first component
export function Home() {
	let footerTag = (
		<footer className="text-center bg-secondary">
			<Footer footerContent="Hello I'm the text of the footer" />
		</footer>
	);
	return footerTag;
}
