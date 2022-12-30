import { useCollection } from "react-firebase-hooks/firestore";
import { ordersCollection } from "~/utils/firebaseClient";

const Admin = () => {
	const [value, loading, error] = useCollection(ordersCollection);

	return (
		<div>
			<h1>Admin</h1>
			<p>Only logged in users can see this page.</p>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.name}</p>}

			{value && (
				<ul>

					{value.docs.map((doc) => {
						const data = doc.data();
						return (
							<li key={doc.id}>
								<div>
									<p>{data.user.id}</p>
									<p>
										{data.image_path} - {data.note}
									</p>
								</div>
							</li>
						)
					})}

				</ul>
			)}
		</div>
	)
}

export default Admin
