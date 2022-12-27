import type { DocumentReference } from "firebase/firestore";

export interface Review {
	author: DocumentReference;
	body: string;
	likes: number;
	stars: number;
	productType: string;
	path: string;
}

export interface User {
	address: string;
	name: string;
	details: Details;
	phoneNumber: null;
	email: string;
}

export interface Details {
	username: string;
}
