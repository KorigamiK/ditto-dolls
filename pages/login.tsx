import Nav from "../components/Nav"

import type { FormEvent } from "react"
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "~/utils/firebaseClient"
import { browserLocalPersistence, setPersistence } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

const Login = () => {

	const auth = getAuth()
	const [user, loading] = useAuthState(auth)

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault()
		const provider = new GoogleAuthProvider()
		try {
			await signInWithRedirect(auth, provider)
			setPersistence(auth, browserLocalPersistence);
		} catch (error) {
			console.error(error)
		}
	}


	return (<>
		<Nav />
		<div className="flex justify-center">
			<main className="mt-48">
				<h1>Ditto-Dolls Login</h1>
				{
					!loading ?
						user ?
							<div>
								<p>Welcome {user.displayName}</p>
								<button onClick={() => auth.signOut()}>Lougout</button>
							</div> :
							<button onClick={handleLogin}>Sign in with Google</button>
						: <p>loading...</p>
				}
			</main>
		</div>
	</>
	)
}

export default Login
