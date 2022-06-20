import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import { authContext } from '../authContext';
import { TUser } from "../types";
import AuthForm from "./AuthForm";
import Greeting from "./Greeting";

const MainWrapper = styled.div`
	width: 100%;
  background: transparent;
`;

const Main = () => {

	const [isAuth, setAuth] = useState(false);
	const [keepData, setKeepData] = useState(false);
	const [user, setUser] = useState<TUser | null>(null);
	const [defaultUser, setDefaultUser] = useState<TUser>({
		login: 'testuser',
		password: '111111',
	});

	const setUserData = (keepData: boolean, userData: TUser) => {
		setDefaultUser((keepData) ? { ...userData } : { ...defaultUser });
		setKeepData(keepData);
		setUser({ ...userData });
		setAuth(true);
	}

	return (
		<authContext.Provider value={{
			keepData: keepData,
			isAuth: isAuth,
			defaultUser: defaultUser,
			user: user
		}}>

			<MainWrapper>
				<Routes>
					<Route path="/"
						element={<AuthForm setUserData={(keepData: boolean, userData: TUser) => setUserData(keepData, userData)} />}
					/>
					<Route path="/login"
						element={<Greeting clickHandler={(d: boolean) => setAuth(d)} />}
					/>
				</Routes>
			</MainWrapper>
		</authContext.Provider>
	);
}

export default Main;