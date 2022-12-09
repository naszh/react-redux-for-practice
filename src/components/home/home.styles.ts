interface HomeStylesType {
	HomeComponent: {
		position: 'absolute' | 'relative' | 'static' | 'fixed';
	};
	HomeImg: {
		width: string;
	};
}

export const HomeStyles: HomeStylesType = {
	HomeComponent: {
		position: 'absolute',
	},
	HomeImg: {
		width: '100%',
	},
};
