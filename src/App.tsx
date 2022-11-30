import { Wrapper } from './App.styles';
import { People } from './components/people/people';
import { SignUpForm } from './components/signup/signup';

function App() {
	return (
		<Wrapper>
			<SignUpForm />
			{/* <People /> */}
		</Wrapper>
	);
}

export default App;
