import { userDataCollection } from '~/utils/firebaseClient';
import { useStore } from '../utils/context/provider'
import { useDocument } from 'react-firebase-hooks/firestore';
import useAuth from './useAuth';
import { UserData } from '~/utils/schema';

const useUser = () => {
	const [user] = useAuth();

	const [userData, setUserData] = useStore((state) => state.user);

	const [value, loading, error] = useDocument(userDataCollection.doc(user?.uid), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	if (value) {
		setUserData({ user: value.data() as UserData });
	}

	return [userData, loading, error];

}

export default useUser;
