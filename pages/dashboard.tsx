import Nav from "../components/Nav"

import { getAuth } from "../src/utils/firebaseClient"
import { useAuthState } from "react-firebase-hooks/auth"

import Link from "next/link"

const Dashboard = () => {

	const [user, loading] = useAuthState(getAuth())

	return <>
		<Nav />
		<div className="flex justify-center">
			<main className="mt-48">
				<h1>Dashboard</h1>
				{
					!loading ?
						user ?
							<div>
								<p>Welcome {user.displayName}</p>
							</div> :
							<Link href='/login'>Please sign in</Link>
						: <p>loading...</p>
				}
			</main>
		</div>
		<div>
			{JSON.stringify(user)}
		</div>
	</>
}

export default Dashboard
