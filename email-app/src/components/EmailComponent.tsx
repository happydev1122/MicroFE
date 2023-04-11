import { Col, Row } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import { Route, useHistory } from "react-router";
import { getFolders } from "../email.service";
import EmailBoxComponent from "./EmailBoxComponent";
import EmailDetailComponent from "./EmailDetailComponent";
import EmailPreviewComponent from "./EmailPreviewComponent";

interface Props {
	user: string;
}
const EmailComponent = ({ user }: Props) => {
	const folders = getFolders(user);

	return (
		<div>
			<Row>
				<Col>
					<Sider>
						<EmailBoxComponent folders={folders} />
					</Sider>
				</Col>
				<Col span={20}>
					<Route path="/messages/:folder">
						<EmailPreviewComponent user={user} />
					</Route>
				</Col>
			</Row>
			<Col span={20}>
				<Route path="/messages/:folder/:id">
					<EmailDetailComponent />
				</Route>
			</Col>
		</div>
	);
};

export default EmailComponent;
