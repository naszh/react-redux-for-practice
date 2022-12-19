interface MainStylesType {
	FilmsListHeader: {
		textAlign: 'center' | 'right' | 'left';
	};
	FilmsContainer: {
		display: string;
		gridTemplateColumns: string;
		margin: string;
		gap: number | string;
	};
	FilmItem: {
		display: string;
		flexDirection: 'column' | 'row';
		justifyContent: string;
		padding: string;
		backgroundColor: string;
	};
	FilmPoster: {
		width: string;
		borderRadius: string;
		display: string;
		height: string;
		flex: string;
		aspectRatio: string;
	};
	FilmInfo: {
		display: string;
		flexGrow: number;
		flexDirection: 'column' | 'row';
		justifyContent: string;
	};
}

export const MainStyles: MainStylesType = {
	FilmsListHeader: {
		textAlign: 'center',
	},
	FilmsContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		margin: '20px',
		gap: 15,
	},
	FilmItem: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '10px',
		backgroundColor: 'rgba(25,118,210,0.2)',
	},
	FilmPoster: {
		width: '100%',
		height: 'auto',
		flex: '0 0 auto',
		borderRadius: '10px',
		display: 'block',
		aspectRatio: '3 / 4',
	},
	FilmInfo: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'end',
	},
};
