export interface IRQLogin{
    username: string;
    password: string;
}

export interface IRLogin {
	accessToken: string;
}

export interface IJwt {
	exp: number;
	role: string[];
	username: string;
}