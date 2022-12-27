import type { DocumentReference } from "firebase/firestore";

export interface Review {
	author: DocumentReference<User>;
	body: string;
	likes: number;
	stars: number;
	productType: string;
}

export interface User {
	address: string;
	name: string;
	details: Details;
	phoneNumber: null;
	email: string;
	displayName: string;
}

export interface Details {
	username: string;
}