import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function toggleMenu(): void {
    setMenuOpen(prev => !prev);
  }

  return (
    <>
      <Overflow className={`${menuOpen && "open"}`} />
      <Container>
        <Content>
          <Link href='/'>
            <a style={{ height: 16 }}>
              <Logo src='/assets/shared/logo.svg' alt='Photosnap' />
            </a>
          </Link>
          <MenuToggler
            type='button'
            className={`${menuOpen && "open"}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </MenuToggler>
          <Nav className={`${menuOpen && "open"}`}>
            {["stories", "features", "pricing"].map(link => (
              <Link key={link} href={`/${link}`} passHref>
                <NavLink>{link}</NavLink>
              </Link>
            ))}
            <Divider />
            <Link href='/' passHref>
              <InviteLinkMobile>Get an invite</InviteLinkMobile>
            </Link>
          </Nav>
          <Link href='/' passHref>
            <InviteLinkDesktop>Get an invite</InviteLinkDesktop>
          </Link>
        </Content>
      </Container>
    </>
  );
}

const Overflow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.black};
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s opacity ease-out, visibility ease-out 0.3s;

  &.open {
    opacity: 0.5;
    visibility: visible;
  }
`;

const Container = styled.header`
  height: 7.2rem;
  padding: 0 calc((100vw - 1300px) / 2);
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  background: ${props => props.theme.colors.white};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 24px;
`;

const Logo = styled.img`
  width: 170px;
  height: 16px;
`;

const MenuToggler = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }

  &.open {
    span:first-of-type {
      transform: rotate(45deg);
    }

    span:last-of-type {
      transform: rotate(-45deg) translate(3.5px, -5px);
    }
  }

  span {
    display: block;
    height: 1px;
    width: 23px;
    background: ${props => props.theme.colors.black};
    transition: transform 0.3s ease;
  }

  span + span {
    margin-top: 5px;
  }
`;

const Nav = styled.nav`
  position: absolute;
  background: ${props => props.theme.colors.white};
  width: 100%;
  left: 0;
  padding: 0 24px;
  top: 7.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 0px;
  transition: height 0.4s ease-out;
  overflow: hidden;

  @media (min-width: 768px) {
    position: static;
    height: auto;
    flex-direction: row;
    width: auto;
    padding: 0;
  }

  @media (min-width: 950px) {
    /* flex: 1; */
  }

  &.open {
    height: 25.3rem;
  }
`;

const NavLink = styled.a`
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  transition: opacity 0.2s ease;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    margin-right: 3.7rem;
    font-size: 1.3rem;

    &:hover {
      text-decoration: none;
      opacity: 0.3;
    }

    & + & {
      margin-top: 0rem !important;
    }
  }

  & + & {
    margin-top: 2rem;
  }
`;

const Divider = styled.hr`
  width: 100%;
  background: red;
  height: 1px;
  border: none;
  background: ${props => props.theme.colors.black};
  opacity: 0.25;
  margin: 2rem 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

const InviteLinkMobile = styled.a`
  background: ${props => props.theme.colors.black};
  text-decoration: none;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.1rem;
  letter-spacing: 0.25rem;
  color: ${props => props.theme.colors.white};
  padding: 0.85em 0;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;

  &:hover {
    background: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.black};
  }

  @media (min-width: 768px) {
    width: 15.8rem;
    font-size: 1.3rem;
  }

  @media (min-width: 950px) {
    display: none;
  }
`;

const InviteLinkDesktop = styled(InviteLinkMobile)`
  display: none !important;

  @media (min-width: 950px) {
    display: block !important;
  }
`;
