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

export interface Order {
	user: DocumentReference<User>;
	image_path: string
	stand_attatched: boolean
	supporting_image_paths: string[]
	num_people: number
	note: string
	num_pet: number
	num_baby: number
}

export interface Details {
	username: string;
}

export interface Cost {
	baby: number;
	pet: number;
	people: number;
}
