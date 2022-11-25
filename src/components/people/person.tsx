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
		<PersonItem
			style={{
				borderRadius:
					props.personInfo.id === 0 || props.personInfo.id === 5 ? '0' : '30px',
			}}
		>
			<PersonInfo>id: {props.personInfo.id}</PersonInfo>
			<PersonInfo>name: {props.personInfo.name}</PersonInfo>
			<PersonInfo>age: {props.personInfo.age}</PersonInfo>
			<PersonInfo
				style={{
					color:
						props.personInfo.id === 0 || props.personInfo.id === 5
							? 'blue'
							: 'initial',
				}}
			>
				hometown: {props.personInfo.hometown}
			</PersonInfo>
			<PersonInfo
				style={{
					color:
						props.personInfo.id === 0 || props.personInfo.id === 5
							? 'lightgreen'
							: 'initial',
				}}
			>
				interests: {props.personInfo.interests.join(', ')}
			</PersonInfo>
			<PersonInfo>hasPet: {props.personInfo.hasPet.toString()}</PersonInfo>
		</PersonItem>
	);
};
