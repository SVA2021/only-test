import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../authContext";
import { TKeepData, TUser, Users } from "../types";
import ErrorMessage from "./ErrorMessage";
import { SubmitButton } from "./styled/Button";
import CheckBox from "./styled/CheckBox";
import FormWrapper from "./styled/FormWrapper";
import InputText from "./styled/InputText";
import Label from "./styled/Label";
import RequiredLabel from "./styled/RequiredLabel";

const AuthForm = ({ setUserData }: TKeepData) => {

	let navigate = useNavigate();

	const { register, handleSubmit, getValues, formState: { errors } } = useForm<TUser>();

	const { keepData, defaultUser } = useAuthContext();
	const [checked, setChecked] = useState(keepData);

	const textPlaceholder = defaultUser.login;
	const pwdPlaceholder = defaultUser.password;

	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);

	const onSubmit: SubmitHandler<TUser> = (data) => {
		fakeServerRequest(data);
	}

	const fakeServerRequest = async (data: TUser) => {

		const checkUserAuth = (data: TUser): boolean => {
			for (const user of Users) {
				if (user.login === data.login && user.password === data.password) return true;
			}
			return false;
		}
		setLoading(true);
		await setTimeout(() => {
			let response = (checkUserAuth(data));
			if (response) {
				setUserData(checked, data);
				navigate("/login");
			} else {
				setError(true);
			}
			setLoading(false);
		}, 2000);

	}

	return (
		<FormWrapper onSubmit={handleSubmit(onSubmit)}>
			{(isError) && <ErrorMessage name={getValues('login')} />}
			<Label>Логин</Label>
			<InputText type={'text'}
				defaultValue={textPlaceholder}
				{...register("login", { required: true, maxLength: 20, minLength: 4 })}
				error={!!errors.login?.type}
			/>
			{errors.login && <RequiredLabel>Обязательное поле</RequiredLabel>}
			<Label>Пароль</Label>
			<InputText type={'password'} autoComplete={'off'}
				defaultValue={pwdPlaceholder}
				{...register("password", { required: true, maxLength: 20, minLength: 4 })}
				error={!!errors.password?.type}
			/>
			{errors.password && <RequiredLabel>Обязательное поле</RequiredLabel>}
			<CheckBox
				checked={checked}
				label={'Запомнить пароль'}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
			/>
			<SubmitButton disabled={isLoading} fullWidth primary>Войти</SubmitButton>
		</FormWrapper>
	);
}

export default AuthForm;