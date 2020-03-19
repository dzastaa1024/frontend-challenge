import React from "react";
import styled, { css } from "styled-components";

import MovieItem from "../movieitem";

export default class MovieList extends React.Component {
  render() {
    const { movies, genres, openModal } = this.props;

    return (
      <MoviesWrapper>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} openModal={openModal} />
        ))}
        {/* Finish the MovieItem component and use it here to display the movie results */}
      </MoviesWrapper>
    );
  }
}

const MoviesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${props =>
    props.modal &&
    css`
      margin: 0;
      padding: 0;
    `}
`;
