import ErrorContainer from "./styled/ErrorContainer";
import WarningIcon from "./styled/WarningIcon";
import { useAuthContext } from "../authContext";

type TName = {name: string}
const ErrorMessage = (props: TName) => {
	// const { user } = useAuthContext();

	// const name = user?.login || 'вообще';
	const message = `Пользователя ${props.name} не существует`;

	return (
		<ErrorContainer>
			<WarningIcon>!</WarningIcon>{message}
		</ErrorContainer>
	);
}

export default ErrorMessage;