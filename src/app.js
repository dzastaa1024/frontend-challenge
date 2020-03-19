import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import SideNavBar from "./components/sidenavbar";
import Discover from "./pages/discover";
import "./css/app.css";
import GlobalStyle from "./GlobalStyle";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <GlobalStyle />
          <PageContainer>
            {/* to jest na dole zdefiniowane , skoro nie ma tego w imporcie- i sa to style*/}
            <SideNavBar {...this.props} /> {/*najprawd. prospry od rutera*/}
            <ContentWrapper>
              <Switch>
                <Route path="/discover" component={Discover} {...this.props} />
              </Switch>
            </ContentWrapper>
          </PageContainer>
        </>
      </Router>
    );
  }
}

const ContentWrapper = styled.main`
  @media (min-width: 900px) {
    padding-left: 26rem;
  }
`;

const PageContainer = styled.main`
  §overflow-x: hidden;
`;
