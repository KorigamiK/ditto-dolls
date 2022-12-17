import Nav from "../components/Nav"

import type { FormEvent } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "../src/utils/firebaseClient"
import { browserSessionPersistence } from "firebase/auth"

const login = () => {

	const handleLogin = async (e: FormEvent) => {
		// login via Google firebase
		e.preventDefault()
		const auth = getAuth()
		const provider = new GoogleAuthProvider()
		const response = await signInWithPopup(auth, provider)
		auth.setPersistence(browserSessionPersistence)
		console.log(auth.currentUser, response)
	}

	return (<>
		<Nav />
		<div className="flex justify-center">
			<main className="mt-48">
				<h1>Pineapple Login</h1>
				<p>Please sign-in:</p>
				<button className="bg-gray-200" onClick={handleLogin}>Sign in</button>
			</main>
		</div>
	</>
	)
}

export default login
