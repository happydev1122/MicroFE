import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import EmailComponent from "./components/EmailComponent";
import Header from "./components/Header";
import { getUsers } from "./email.service";

const EmailApp = () => {
	const users = getUsers();
	const [userOption, setUserOption] = useState(users[0]);

	const handleSelectedOption = (option: string) => {
		setUserOption(option);
	};

	return (
		<div>
			<Header userOptions={users} onSelectedOption={handleSelectedOption} />
			<Switch>
				<Redirect exact from="/" to="/messages/inbox" />
				<Route path="/messages">
					<EmailComponent user={userOption} />
				</Route>
				<Route path="/contacts">
					<h2>Contacts</h2>
				</Route>
				<Route path="/preferences">
					<h2>Preferences</h2>
				</Route>
			</Switch>
		</div>
	);
};

export default EmailApp;
