import { PersonInfo, PersonItem } from './people.styles';

export interface PersonType {
	id: number;
	name: string;
	age: number;
	hometown: string;
	interests: Array<string>;
	hasPet: boolean;
}

export interface PersonElementProps {
	personInfo: PersonType;
	borderRadius: string;
}

export interface PersonInfoProps {
	personInfo?: PersonType;
	color?: string;
}

export const PersonElement = ({
	personInfo,
	borderRadius,
}: PersonElementProps) => {
	return (
		<PersonItem borderRadius={borderRadius} personInfo={personInfo}>
			<PersonInfo>id: {personInfo.id}</PersonInfo>
			<PersonInfo>name: {personInfo.name}</PersonInfo>
			<PersonInfo>age: {personInfo.age}</PersonInfo>
			<PersonInfo personInfo={personInfo} color='blue'>
				hometown: {personInfo.hometown}
			</PersonInfo>
			<PersonInfo personInfo={personInfo} color='lightgreen'>
				interests: {personInfo.interests.join(', ')}
			</PersonInfo>
			<PersonInfo>hasPet: {personInfo.hasPet.toString()}</PersonInfo>
		</PersonItem>
	);
};
