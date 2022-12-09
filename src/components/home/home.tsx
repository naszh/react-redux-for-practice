import { Header } from '../header/header';
import { HomeStyles } from './home.styles';

export const Home = () => {
	return (
		<>
			<Header />
			<div style={HomeStyles.HomeComponent}>HOME COMPONENT</div>
			<img
				src='/imgs/richik.jpg'
				alt='just a cat'
				style={HomeStyles.HomeImg}
			></img>
		</>
	);
};
