import useUserData from "~/hooks/useUserData";

export default function Playground() {

	const [user] = useUserData();

	return (
		<div>
			hihi
		</div>
	);
}
