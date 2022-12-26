import type { DocumentReference } from "firebase/firestore";

export interface Review {
	author: DocumentReference;
	body: string;
	likes: number;
	stars: number;
	productType: string;
	path: string
}

export interface User {
	id: string;
	displayName: string;
}
