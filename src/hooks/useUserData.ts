import { userCollection } from '~/utils/firebaseClient';
import { useDocument } from 'react-firebase-hooks/firestore';
import useAuth from './useAuth';
import { doc } from 'firebase/firestore';
import { User } from '~/utils/schema';

const useUser = () => {
	const [user] = useAuth();

	const userDataDoc = user ? doc(userCollection, user.uid) : null;

	const [value, loading, error] = useDocument(userDataDoc, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	return [value?.data() as User, loading, error];

}

export default useUser;
