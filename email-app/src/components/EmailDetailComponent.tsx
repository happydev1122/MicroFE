import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Email } from "../email.model";
import { getEmailById } from "../email.service";

const EmailDetailComponent = () => {
	const [emailDetail, setEmailDetail] = useState<Email | undefined>();
	// const match = useRouteMatch();
	// console.log(match);
	const { id } = useParams<any>();
	useEffect(() => {
		const emailById = getEmailById(id);
		setEmailDetail(emailById);
	}, [id]);
	return (
		<div>
			<h3>Subject</h3>
			<p>{emailDetail?.subject}</p>
		</div>
	);
};

export default EmailDetailComponent;
