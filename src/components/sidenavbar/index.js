import React from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default class SideNavBar extends React.Component {
  state = {
    activeSideBar: true
  };

  /* Write the necessary functions to show/hide the side bar on mobile devices */
  componentDidMount() {
    if (window.innerWidth < 900) {
      this.setState({ activeSideBar: false });
    }
  }

  onClick = () => {
    this.setState({
      activeSideBar: !this.state.activeSideBar
    });
  };

  render() {
    const { activeSideBar } = this.state;

    return (
      <SideNavBarCont className={activeSideBar && "visible"}>
        <SideNavBarContWrapper>
          <Humburger onClick={this.onClick} />

          {/* Implement a hamburger icon slide in effect for mobile devices */}
          <SideNavMainLink
            className="menu_nav_link main_nav_link"
            to="/"
            activeClassName="active"
            exact
          >
            Wesley
            <NavIcon arrow></NavIcon>
          </SideNavMainLink>
          <SideNavMainLink
            className="menu_nav_link"
            to="/discover"
            activeClassName="active"
          >
            Discover
            <NavIcon search></NavIcon>
          </SideNavMainLink>
          <SideNavHeader>
            <HeaderText>Watched</HeaderText>
          </SideNavHeader>
          <NavLink
            className="menu_nav_link"
            to="/watched/movies"
            activeClassName="active"
          >
            Movies
          </NavLink>
          <NavLink
            className="menu_nav_link"
            to="/watched/tv-shows"
            activeClassName="active"
          >
            Tv Shows
          </NavLink>
          <SideNavHeader>
            <HeaderText>Saved</HeaderText>
          </SideNavHeader>
          <NavLink
            className="menu_nav_link"
            to="/saved/movies"
            activeClassName="active"
          >
            Movies
          </NavLink>
          <NavLink
            className="menu_nav_link"
            to="/saved/tv-shows"
            activeClassName="active"
          >
            Tv Shows
          </NavLink>
        </SideNavBarContWrapper>
      </SideNavBarCont>
    );
  }
}

const SideNavBarContWrapper = styled.div`
  position: relative;
`;

const Humburger = styled.span`
  margin-right: 2.5rem;
  display: inline-block;
  background-color: black;
  width: 3rem;
  height: 3px;
  border-radius: 1rem;
  position: absolute;
  right: -9rem;
  top: 8rem;

  ${props =>
    props.activeSideBar &&
    css`
      display: none;
    `}

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    background: black;
    width: 3rem;
    height: 3px;
    border-radius: 1rem;
  }

  ::before {
    bottom: 1rem;
  }

  ::after {
    bottom: -1rem;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 26rem;
  height: 100%;
  background-color: ${colors.sideNavBar};
  left: -26rem;
  transition: left 0.3s;

  &.visible {
    left: 0 !important;
  }

  @media (min-width: 900px) {
    left: 0;
  }
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 2.5rem 3.5rem;
  font-size: 3rem;
  font-weight: 400;
  color: #fff;

  &:hover {
    background-color: ${colors.primaryColor};
    font-weight: 300;
  }
`;

const NavIcon = styled.div`
  position: absolute;
  right: 3.5rem;
  top: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 9;
  width: 2rem;
  height: 2rem;

  ${props =>
    props.arrow &&
    css`
      background-image: url("../../images/arrow-icon.png");
    `}

  ${props =>
    props.search &&
    css`
      background-image: url("../../images/search-icon-white.png");
    `}
`;

const SideNavHeader = styled.div`
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  border-bottom: 1px solid #aaa;
  padding: 2rem 0;
  margin-left: 3.5rem;
`;

const HeaderText = styled.div``;

const NavLink = styled(Link)`
  display: block;
  color: #ddd;
  font-size: 1.6rem;
  padding: 1rem 0 1rem 3.5rem;

  &:last-child {
    margin-bottom: 5rem;
  }
`;
