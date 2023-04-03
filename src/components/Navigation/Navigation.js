import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';

export const Navigation = () => {
  const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;

    &.active {
      color: orange;
    }
  `;
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.nav__link} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.nav__link} to="/movies" end>
            Movies
          </StyledLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
