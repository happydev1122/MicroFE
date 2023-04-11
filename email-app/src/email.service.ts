import { Email } from "./email.model";
import messages from "./messages.json";

export const getFolders = (user: string): string[] => {
	// return [
	// 	...new Set(
	// 		messages
	// 			.filter((message) => message.to === user)
	// 			.map((message) => message.folder)
	// 	),
	// ].sort((a: string, b: string) => {
	// 	if (a === "inbox") {
	// 		return -1;
	// 	}

	// 	if (b === "inbox") {
	// 		return 1;
	// 	}
	// 	return a < b ? -1 : 1;
	// });
	return Array.from(
		new Set(
			messages
				.filter((message) => message.to === user)
				.map((message) => message.folder)
		)
	).sort((a: string, b: string) => {
		if (a === "inbox") {
			return -1;
		}

		if (b === "inbox") {
			return 1;
		}
		return a < b ? -1 : 1;
	});
};

export const getEmail = (folder: string, user: string): Email[] => {
	return messages
		.filter((message) => message.folder === folder)
		.filter((message) => message.to === user)
		.sort((a, b) => {
			let dateA = new Date(a.date);
			let dateB = new Date(b.date);
			return dateB.getTime() - dateA.getTime();
		});
};

export const getEmailById = (id: string): Email | undefined => {
	return messages.find((message) => message._id === id);
};

export const getUsers = (): any => {
	const a = messages.map((message) => message.to);
	const b = new Set(a);
	return Array.from(b);
};

const paddingZero = (input: number): string => {
	return `${input <= 9 ? "0" : ""}${input}`;
};

export const formatShortDate = (strDate: string): string => {
	let date = new Date(strDate);
	let year = date.getFullYear();
	let month = paddingZero(date.getMonth() + 1);
	let day = paddingZero(date.getUTCDate());
	return `${year}-${month}-${day}`;
};

export const formatFullDate = (strDate: string): string => {
	let date = new Date(strDate);
	let hour = date.getHours();
	let amPM = hour <= 12 ? "AM" : "PM";
	let options: any = { year: "numeric", month: "long", day: "numeric" };
	let result =
		date.toLocaleString("en", options) +
		" " +
		date.getUTCHours() +
		":" +
		date.getUTCMinutes() +
		":" +
		date.getUTCSeconds() +
		" " +
		amPM;
	return result;
};
