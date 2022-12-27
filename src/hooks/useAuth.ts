import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "~/utils/firebaseClient";

const useAuth = () => {
	const authState = useAuthState(getAuth());
	return authState;
}

export default useAuth;
