import { TbHeart, TbHeartPlus } from 'react-icons/tb';
import styled from 'styled-components';

interface MainStylesType {
	FilmsHeaderContainer: {
		display: string;
		gridTemplateColumns: string;
		alignItems: string;
	};
	FilmsListHeader: {
		textAlign: 'center' | 'right' | 'left';
	};
	LinkToFav: {
		textDecoration: string;
		color: string;
	};
	LinkContainer: {
		margin: string;
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
	FilmName: {
		margin: string;
	};
}

export const MainStyles: MainStylesType = {
	FilmsHeaderContainer: {
		display: 'grid',
		gridTemplateColumns: '2fr 1fr',
		alignItems: 'center',
	},
	FilmsListHeader: {
		textAlign: 'right',
	},
	LinkToFav: {
		textDecoration: 'none',
		color: 'inherit',
	},
	LinkContainer: {
		margin: '0 auto',
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
	FilmName: {
		margin: '0',
	},
};

export const Heart = styled(TbHeart)`
	font-size: 28px;
	vertical-align: sub;
	cursor: pointer;
`;

export const HeartPlus = styled(TbHeartPlus)`
	font-size: 28px;
	align-self: end;
	cursor: pointer;
`;
