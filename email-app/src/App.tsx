import React from "react";
import { BrowserRouter } from "react-router-dom";
import EmailApp from "./EmailApp";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<EmailApp />
		</BrowserRouter>
	);
};

export default App;
