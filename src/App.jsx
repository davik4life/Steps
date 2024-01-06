import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./index.css";
import { messages } from "./data.js";

function Numbersline() {
	return (
		<div className="numbers">
			<div className={step >= 1 ? "active" : ""}>1</div>
			<div className={step >= 2 ? "active" : ""}>2</div>
			<div className={step >= 3 ? "active" : ""}>3</div>
		</div>
	);
}
export default function App() {
	const [step, setStep] = useState(1);
	const [display, setDisplay] = useState(true);

	function handlePrevClicks() {
		step > 1 && setStep((s) => s - 1);
	}
	function handleNextClicks() {
		step < 3 && setStep((s) => s + 1);
	}

	function closeDisplay() {
		setDisplay((dis) => !dis);
	}

	function name(params) {}
	return (
		<>
			<button className="close" onClick={closeDisplay}>
				{/* ${display} ? &#x2B; : &times; */}
				&times;
			</button>
			{display && (
				<div className="steps">
					<h1>Steps Form</h1>
					<div className="numbers">
						<div className={step >= 1 ? "active" : ""}>1</div>
						<div className={step >= 2 ? "active" : ""}>2</div>
						<div className={step >= 3 ? "active" : ""}>3</div>
					</div>
					<p className="message">
						{/* <Message /> */}
						Step {step}: {messages[step - 1]}
					</p>
					<div className="buttons">
						<button
							style={{
								backgroundColor: "#7950F2",
								color: "#fff",
							}}
							onClick={handlePrevClicks}
						>
							Prev
						</button>
						<button
							style={{
								backgroundColor: "#7950F2",
								color: "#fff",
							}}
							onClick={handleNextClicks}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
}

// function Message() {
// // 	// return messages.map((message) => messages[0]);
//   return
//   <>
//     {Step `${step}:` {messages[step - 1]}};
//   </>
// }
