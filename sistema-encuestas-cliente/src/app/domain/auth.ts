export interface IRQLogin{
    Email: string;
    Clave: string;
}

export interface IRLogin {
	JwtEncuestas: string;
}

export interface IJwt {
	exp: number;
	role: string[];
	username: string;
}