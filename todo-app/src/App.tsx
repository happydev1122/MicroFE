import React, { useState } from "react";
import "./App.css";

function App() {
	const [listItem, setListItem] = useState([]);

	const handleAddItem = (event: any) => {
		event.preventDefault();
		const item: any = event.target.value;
		console.log(item);
		// setListItem([...listItem,item]);
	};
	return (
		<div className="container d-flex justify-content-center mt-5 ">
			<form>
				<div className="form-group d-flex">
					<input type="text" className="form-control mr-2" />
					<button onClick={(e) => handleAddItem(e)} className="btn btn-primary">
						Add
					</button>
				</div>
			</form>
			<ul>
				{listItem.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
