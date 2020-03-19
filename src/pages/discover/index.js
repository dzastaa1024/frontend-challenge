import React from "react";
import styled, { css } from "styled-components";

import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import Modal from "../../components/modal";
import MovieItem from "../../components/movieitem";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      year: 0,
      results: [],
      movieDetails: null,
      totalCount: 0,
      genreOptions: [
        { id: 0, name: "Action" },
        { id: 1, name: "Advanture" }
      ],
      isModal: false,
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 }
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PL", name: "Polish" }
      ]
    };
  }

  // Write a function to preload the popular movies when page loads & get the movie genres

  // Write a function to get the movie details based on the movie id taken from the URL.

  async searchMovies() {
    const { keyword, year } = this.state;

    const res = await fetcher.getMovieGenres(keyword, year);

    this.setState({
      results: res.results,
      totalCount: res.results.length
    });

    // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  }

  getModalData = id => {
    const movie = this.state.results.find(movie => movie.id === id);
    this.setState({ movieDetails: movie });
    this.openModal();
  };

  openModal = () => {
    this.setState({
      isModal: true
    });
  };

  closeModal = () => {
    this.setState({
      isModal: false
    });
  };

  handleChange = async e => {
    const { name, value } = e.target;

    await this.setState({
      [name]: value
    });

    value && this.searchMovies();
  };

  renderModalContent = () => (
    <MovieItem modal movie={this.state.movieDetails} />
  );
  renderModalAction = () => (
    <>
      <ModalBtn>Watch offline</ModalBtn>
      <ModalBtn secondary>Watch online</ModalBtn>
    </>
  );

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
      keyword,
      isModal
    } = this.state;

    return (
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            keyword={keyword}
            searchMovies={this.handleChange}
          />
        </MovieFilters>
        <MovieResults>
          {totalCount > 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
          <MovieList
            openModal={this.getModalData}
            movies={results || []}
            genres={genreOptions || []}
          />
          {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
        </MovieResults>
        {isModal && (
          <Modal
            closeModal={this.closeModal}
            modalContent={this.renderModalContent()}
            modalAction={this.renderModalAction()}
          />
        )}
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.div`
  padding: 6rem 3.5rem;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const TotalCounter = styled.div`
  font-weight: 100;
  padding-top: 4rem;
  padding-bottom: 1.5rem;

  @media (min-width: 700px) {
    display: none;
  }
`;

const MovieResults = styled.div`
  flex: 2;
  margin-right: 2rem;
`;

const MovieFilters = styled.div`
  flex: 1;
`;

const MobilePageTitle = styled.header`
  padding-left: 6rem;
  font-size: 3.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  @media (min-width: 700px) {
    display: none;
  }
`;

const ModalBtn = styled.button`
  width: 12rem;
  border: 1.5px solid rgb(64, 78, 95);
  padding: 1rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  color: rgb(64, 78, 95);
  background-color: #fff;

  &:first-child {
    margin-right: 2rem;
  }

  ${props =>
    props.secondary &&
    css`
      color: #fff;
      background-color: rgb(64, 78, 95);
    `}
`;
