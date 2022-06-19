import SubTitle from "./styled/SubTitle";

const Greeting = (props: any) => {
	const user = props.user;
	return (
		<SubTitle>Здравствуйте, <b>{user}</b></SubTitle>
	);
}

export default Greeting;