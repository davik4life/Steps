// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./index.css";
import { messages } from "./data.js";

export default function App() {
	const step = 1;
	return (
		<div className="steps">
			<h1>Steps Form</h1>
			<div className="numbers">
				<div className={`${step >= 1 ? "active" : ""}`}>1</div>
				<div className={`${step >= 2 ? "active" : ""}`}>2</div>
				<div className={`${step >= 3 ? "active" : ""}`}>3</div>
			</div>
			<p className="message">
				{/* <Message /> */}
				Step {step}: {messages[step - 1]}
			</p>
			<div className="buttons">
				<button style={{ backgroundColor: "#7950F2", color: "#fff" }}>
					Prev
				</button>
				<button style={{ backgroundColor: "#7950F2", color: "#fff" }}>
					Next
				</button>
			</div>
		</div>
	);
}

// function Message() {
// // 	// return messages.map((message) => messages[0]);
//   return
//   <>
//     {Step `${step}:` {messages[step - 1]}};
//   </>
// }
