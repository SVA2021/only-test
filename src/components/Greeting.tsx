import SubTitle from "./styled/SubTitle";
import styled from 'styled-components'
import { LogOutButton } from "./styled/Button";
import { TGreeting } from "../types";
import { useAuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div`
	margin: 0 auto;
	background: transparent;
	display: flex;
	flex-direction: column;
`;

const Greeting = ({ clickHandler }: TGreeting) => {
	let navigate = useNavigate();

	const { user } = useAuthContext();
	const name = user?.login || 'none';

	const logOutHandler = () => {
		clickHandler(false);
		navigate('/');
	}

	return (
		<LoginWrapper>
			<SubTitle>Здравствуйте, <b>{name}</b></SubTitle>
			<LogOutButton onClick={() => logOutHandler()}>Выйти</LogOutButton>
		</LoginWrapper>
	);
}

export default Greeting;