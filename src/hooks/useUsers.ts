import { useCollection } from "react-firebase-hooks/firestore";

import { userCollection } from "~/utils/firebaseClient";
import { User } from "~/utils/schema";
export const useUsers = () => {
	const [users, loading, error] = useCollection(userCollection);

	let allUsers: User[] = [];
	if (!loading && !error)
		allUsers = users!.docs.map((user) => user.data());

	return { allUsers, loading, error };
}
