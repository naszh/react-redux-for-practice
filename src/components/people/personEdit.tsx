import { useNavigate, useParams } from 'react-router-dom';
import { ButtonElement } from '../common/button/button';
import { PersonEditTitle } from './people.styles';

export const PersonEditPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const goToMainPage = () => {
		navigate('/main', { replace: true, state: { from: id } });
	};

	return (
		<PersonEditTitle>
			Edit person with ID {id}
			<br />
			<ButtonElement onClick={goToMainPage} text={'go back'} size={'small'} />
		</PersonEditTitle>
	);
};
