import { FcUndo } from 'react-icons/fc';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  // &.active {
  //   color: orange;
  }
`;

export const BtnBack = () => {
  return (
    <button type="button">
      <StyledLink to={`/movies`}>
        <FcUndo /> <span> Go back </span>
      </StyledLink>
    </button>
  );
};
