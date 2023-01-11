interface NotFoundStylesType {
  Text: {
    textAlign: 'center' | 'left' | 'right';
    color: string;
    fontWeight: string;
    fontSize: string;
  };
}

export const NotFoundStyles: NotFoundStylesType = {
  Text: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: '24px',
  },
};
