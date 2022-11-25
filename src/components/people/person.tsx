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

export interface PersonInfoProps {
	color?: string;
}

export const PersonElement = (props: PersonElementProps) => {
	return (
		<PersonItem
			style={{
				borderRadius:
					props.personInfo.id === 0 || props.personInfo.id === 5 ? '0' : '30px',
			}}
		>
			<PersonInfo>id: {props.personInfo.id}</PersonInfo>
			<PersonInfo>name: {props.personInfo.name}</PersonInfo>
			<PersonInfo>age: {props.personInfo.age}</PersonInfo>
			<PersonInfo color='blue'>
				hometown: {props.personInfo.hometown}
			</PersonInfo>
			<PersonInfo color='lightgreen'>
				interests: {props.personInfo.interests.join(', ')}
			</PersonInfo>
			<PersonInfo>hasPet: {props.personInfo.hasPet.toString()}</PersonInfo>
		</PersonItem>
	);
};
