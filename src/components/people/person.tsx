import { PersonInfo, PersonItem } from './people.styles';

interface PersonType {
	id: number;
	name: string;
	age: number;
	hometown: string;
	interests: Array<string>;
	hasPet: boolean;
}

interface PersonElementProps {
	personInfo: PersonType;
}

export const PersonElement = (props: PersonElementProps) => {
	return (
		<PersonItem>
			<PersonInfo>id: {props.personInfo.id}</PersonInfo>
			<PersonInfo>name: {props.personInfo.name}</PersonInfo>
			<PersonInfo>age: {props.personInfo.age}</PersonInfo>
			<PersonInfo>hometown: {props.personInfo.hometown}</PersonInfo>
			<PersonInfo>
				interests: {props.personInfo.interests.join(', ')}
			</PersonInfo>
			<PersonInfo>hasPet: {props.personInfo.hasPet.toString()}</PersonInfo>
		</PersonItem>
	);
};
