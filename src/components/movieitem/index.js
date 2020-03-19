import React from "react";
import styled, { css } from "styled-components";

export default class MovieItem extends React.Component {
  render() {
    const { movie, openModal = () => {}, modal } = this.props;
    return (
      // The MovieItemWrapper must be linked to the movie details popup
      <MovieItemWrapper onClick={() => openModal(movie.id)} modal={modal}>
        <LeftCont>
          <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        </LeftCont>
        <RightCont>
          <MovieTitle>{movie.title}</MovieTitle>
          <Label> Action| Drama | Comedy </Label>
          <Movieavarage modal={modal}>{movie.vote_average} </Movieavarage>
          <Overview modal={modal}>{movie.overview}></Overview>
          <Moviedate modal={modal}>{movie.release_date}</Moviedate>
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 2rem;
  display: flex;
  margin-bottom: 1.5rem;
  position: relative;
  height: 300px;
  cursor: pointer;

  ${props =>
    props.modal &&
    css`
      padding: 0;
      cursor: unset;
    `}
`;

const LeftCont = styled.div`
  display: inline-block;
  margin-right: 2rem;
  flex: 1 1 30%;
`;

const RightCont = styled.div`
  display: inline-block;
  flex: 1 1 70%;
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

const MovieTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Label = styled.div`
  font-size: 1.5rem;
  color: #d9e021;
  margin-bottom: 1rem;
`;

const Overview = styled.p`
  font-size: 1.6rem;
  text-align: justify;

  text-indent: 100%;
  overflow: hidden;
  position: relative;
  height: 16rem;

  ${props =>
    !props.modal &&
    css`
      background: rgb(255, 255, 255);
      background: linear-gradient(
        355deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(0, 0, 0, 1) 32%
      );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

const Movieavarage = styled.span`
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  background-color: #d9e021;
  color: #fff;
  border-radius: 7px;
  position: absolute;
  right: 2rem;
  top: 2rem;
  text-align: center;
  line-height: 3rem;

  ${props =>
    props.modal &&
    css`
      right: 0rem;
      top: 0rem;
    `}
`;

const Moviedate = styled.span`
  font-size: 1.5rem;
  color: #d9e021;
  position: absolute;
  bottom: 2rem;

  ${props =>
    props.modal &&
    css`
      bottom: 0;
    `}
`;
