import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './authProvider';

export const RequireAuth = ({ children }: any) => {
	const auth = useContext(AuthContext);

	if (!auth.person) {
		return <Navigate to='/signin' />;
	}
	return children;
};
