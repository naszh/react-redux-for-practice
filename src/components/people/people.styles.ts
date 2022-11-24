import styled from 'styled-components';
import { PersonInfoProps } from './person';

export const PeopleList = styled.ul`
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 15px;
`;

export const PersonItem = styled.li`
	list-style-type: none;
	background-color: rgba(210, 25, 25, 0.05);
	border: 1px solid rgba(210, 25, 25, 0.1);
	border-radius: 20px;
	padding: 20px;
`;

export const PersonInfo = styled.p<PersonInfoProps>`
	margin: 8px 0 0;
	color: ${props => props.color};
`;
