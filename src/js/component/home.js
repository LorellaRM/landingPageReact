import React from "react";
import Footer from "./footer.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Footer footerContent="Hello I'm the text of the footer" />
		</div>
	);
}
