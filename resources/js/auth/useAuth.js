import {useContext} from 'react';

import AuthContext from './context';

const useAuth = () => {
	const {user, setUser} = useContext(AuthContext);

	const logIn = (data) => {
		const values = JSON.stringify(data);
		const token = await fakeAuth();
		localStorage.setItem('bearerToken', token);
		localStorage.setItem('user', values);
		setUser(data);
	};

	const logout = (data, token) => {
		const values = JSON.stringify(data);
		localStorage.removeItem('bearerToken');
		localStorage.removeItem('user');
		setUser(null);
	};


	return {user, logout, logIn};
};

export default useAuth;
