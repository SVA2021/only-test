import { createContext, useContext } from "react";
import { TAuthData } from "./types";

export const authContext = createContext<TAuthData>({
	keepData: false,
	isAuth: false,
	defaultUser: {
		login: 'testuser',
		password: '111111',
	},
	user: null,
})

export const useAuthContext = () => useContext(authContext);