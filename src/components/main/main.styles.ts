interface MainStylesType {
	H: {
		textAlign: 'center' | 'right' | 'left';
	};
	FilmsContainer: {
		display: string;
		gridTemplateColumns: string;
		margin: string;
		gap: number | string;
	};
	FilmItem: {
		padding: string;
		backgroundColor: string;
	};
	FilmPoster: {
		width: string;
		borderRadius: string;
	};
}

export const MainStyles: MainStylesType = {
	H: {
		textAlign: 'center',
	},
	FilmsContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		margin: '20px',
		gap: 15,
	},
	FilmItem: {
		padding: '10px',
		backgroundColor: 'rgba(25,118,210,0.2)',
	},
	FilmPoster: {
		width: '100%',
		borderRadius: '10px',
	},
};
