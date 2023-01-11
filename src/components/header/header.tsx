import { NavLink } from 'react-router-dom';

import { HeaderContainer } from './header.styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink
        to={'/home'}
        style={({ isActive }) =>
          isActive ? { color: 'yellow' } : { color: 'inherit' }
        }
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        to={'/main'}
        style={({ isActive }) =>
          isActive ? { color: 'yellow' } : { color: 'inherit' }
        }
      >
        <p>Main</p>
      </NavLink>
      <NavLink
        to={'/about'}
        style={({ isActive }) =>
          isActive ? { color: 'yellow' } : { color: 'inherit' }
        }
      >
        <p>About</p>
      </NavLink>
    </HeaderContainer>
  );
};
