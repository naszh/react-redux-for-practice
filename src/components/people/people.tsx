import { Header } from '../header/header';
import { PersonElement } from './person';

import { PeopleList } from './people.styles';

const peopleArr = [
  {
    id: 0,
    name: 'Alex',
    age: 32,
    hometown: 'Minsk',
    interests: ['music', 'sport'],
    hasPet: true,
  },
  {
    id: 1,
    name: 'Kate',
    age: 26,
    hometown: 'Gomel',
    interests: ['books', 'photography'],
    hasPet: false,
  },
  {
    id: 2,
    name: 'Ivan',
    age: 20,
    hometown: 'Volkovysk',
    interests: ['travel'],
    hasPet: false,
  },
  {
    id: 3,
    name: 'Artem',
    age: 22,
    hometown: 'Brest',
    interests: ['cooking', 'music'],
    hasPet: true,
  },
  {
    id: 4,
    name: 'Olga',
    age: 23,
    hometown: 'Grodno',
    interests: ['sport', 'programming'],
    hasPet: true,
  },
  {
    id: 5,
    name: 'Max',
    age: 39,
    hometown: 'Grodno',
    interests: ['auto', 'fishing'],
    hasPet: true,
  },
];

export const People = () => {
  return (
    <>
      <Header />
      <p>In order to edit a user you need to click on it</p>
      <PeopleList>
        {peopleArr.map(person => (
          <PersonElement personInfo={person} key={person.id} />
        ))}
      </PeopleList>
    </>
  );
};
export { PersonElement };
