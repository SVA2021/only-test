export type TUser = {
	login: string
	password: string
}

export type TAuthData = {
	keepData: boolean
	isAuth: boolean
	defaultUser: TUser
	user: TUser | null
}

export type TStatus = {
	idle: boolean
	error: boolean
}

export type TGreeting = {
	clickHandler: (d: boolean) => void
}

export type TKeepData = {
	setUserData: (keepData: boolean, userData: TUser) => void
}

export const Users: TUser[] = [
	{
		login: 'testuser',
		password: '111111',
	},
	{
		login: 'testuser2',
		password: '222222',
	},
	{
		login: 'testuser3',
		password: '333333',
	}
]