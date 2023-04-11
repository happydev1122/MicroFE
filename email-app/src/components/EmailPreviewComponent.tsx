import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { formatShortDate, getEmail } from "../email.service";

interface Props {
	user: string;
}

const columns = [
	{
		title: "Sender",
		dataIndex: "from",
		key: "from",
		width: "30%",
	},
	{
		title: "Subject",
		dataIndex: "subject",
		key: "subject",
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
		width: "20%",
	},
];

const EmailPreviewComponent = ({ user }: Props) => {
	const [data, setData] = useState<any>();
	const match = useRouteMatch();
	const { folder } = useParams<any>();
	const history = useHistory();

	useEffect(() => {
		const emails = getEmail(folder, user);
		const emailsAddKey = emails.map((email) => {
			return {
				...email,
				date: formatShortDate(email.date),
				key: email._id,
			};
		});
		setData(emailsAddKey);
	}, [folder, user]);
	return (
		<Table
			columns={columns}
			dataSource={data}
			scroll={{ y: 200 }}
			pagination={{ hideOnSinglePage: true }}
			onRow={(email) => {
				return {
					onClick: () => {
						history.push(`${match.url}/${email._id}`);
					},
				};
			}}
		></Table>
	);
};

export default EmailPreviewComponent;
