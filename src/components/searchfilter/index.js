import React from "react";
import styled, { css } from "styled-components";
import iconMagnifying from "../../images/search-icon-yellow.png";
import iconFilter from "../../images/filter-icon.png";
import yearIcon from "../../images/year-icon.png";

export default class SearchFilters extends React.Component {
  state = {
    genre: false,
    voute: false,
    language: false
  };

  onClick = e => {
    this.setState({ [e.target.id]: !this.state[e.target.id] });
  };

  render() {
    const {
      genres,
      ratings,
      languages,
      searchMovies,
      keyword,
      year
    } = this.props;

    const { genre, voute, language } = this.state;

    return (
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont">
          {/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
          <Field>
            <Icon src={iconMagnifying} />
            <Input
              type="text"
              placeholder="Search for movies"
              value={keyword}
              onChange={searchMovies}
              name="keyword"
            />
          </Field>
          <Field hideOnMobile>
            <Icon src={yearIcon} />
            <Input
              type="number"
              placeholder="Year of release"
              value={year}
              onChange={searchMovies}
              name="year"
            />
          </Field>
        </SearchFiltersCont>
        <SearchFiltersCont>
          <CategoryTitle>Movies</CategoryTitle>
          {/* Implement a component called "ExpandableFilters" and use it for the filter categories */}
          <Field hideOnDesktop>
            <Icon src={iconFilter} filterIcon />
          </Field>
          <FiltersList>
            <FiltersItem id="genre" onClick={this.onClick}>
              <FiltersIcon>{genre ? "-" : "+"}</FiltersIcon>
              Select genre(s)
              <FiltersSubList className={genre && "expanded"}>
                {genres.map(genre => (
                  <FiltersSubItem key={genre.id}>
                    <Label>
                      <Checkbox type="checkbox" />
                      <CustomCheckbox />
                      {genre.name}
                    </Label>
                  </FiltersSubItem>
                ))}
              </FiltersSubList>
            </FiltersItem>
            <FiltersItem id="voute" onClick={this.onClick}>
              <FiltersIcon>{voute ? "-" : "+"}</FiltersIcon>
              Select min voute
              <FiltersSubList className={voute && "expanded"}>
                {ratings.map(rating => (
                  <FiltersSubItem key={rating.id}>
                    <Label>
                      <Checkbox type="checkbox" />
                      <CustomCheckbox />
                      {rating.name}
                    </Label>
                  </FiltersSubItem>
                ))}
              </FiltersSubList>
            </FiltersItem>
            <FiltersItem id="language" onClick={this.onClick}>
              <FiltersIcon>{language ? "-" : "+"}</FiltersIcon>
              Select language
              <FiltersSubList className={language && "expanded"}>
                {languages.map(language => (
                  <FiltersSubItem key={language.id}>
                    <Label>
                      <Checkbox type="checkbox" />
                      <CustomCheckbox />
                      {language.name}
                    </Label>
                  </FiltersSubItem>
                ))}
              </FiltersSubList>
            </FiltersItem>
          </FiltersList>
        </SearchFiltersCont>
      </FiltersWrapper>
    );
  }
}

const FiltersList = styled.ul`
  font-size: 1.6rem;
  display: none;

  @media (min-width: 700px) {
    display: block;
  }
`;

const FiltersItem = styled.li`
  list-style-type: none;
  margin-bottom: 2rem;
  position: relative;
  cursor: pointer;
`;

const FiltersIcon = styled.span`
  padding-right: 17px;
  display: inline-block;
  width: 10px;
  text-align: center;
`;

const FiltersSubList = styled.ul`
  padding-top: 2rem;
  height: 0px;
  overflow-y: hidden;
  padding: 0;
  padding-top: 10px;
  /* transition: all 3s; */
`;

const FiltersSubItem = styled.li`
  list-style-type: none;
  font-weight: 100;
  font-size: 1.2rem;
  padding: 0.2rem 0;
  position: relative;
`;

const Label = styled.label`
  width: 100%;
  cursor: pointer;
  display: inline-block;
`;

const CustomCheckbox = styled.span`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid #000;
  border-radius: 3px;
  position: relative;
  left: 0;
  top: 50%;
  margin-top: -0.6rem;
  margin-right: 10px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  display: none;

  &:checked + span::after {
    content: "x";
    display: inline-block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 8px;
  }
`;

const FiltersWrapper = styled.div`
  position: relative;
  display: flex;

  @media (min-width: 700px) {
    flex-direction: column;
  }
`;

const SearchFiltersCont = styled.div`
  flex: 1 0 3.5rem;

  &:first-child {
    flex: 1 1 100%;
    margin-right: 2rem;
  }

  @media (min-width: 700px) {
    background-color: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`;

const Field = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;
  border-bottom: 2px solid #d9e021;

  @media (min-width: 700px) {
    &:first-child {
      margin-bottom: 2rem;
    }
  }

  /* TODO: refactor this */
  ${props =>
    props.hideOnMobile &&
    css`
      display: none;

      @media (min-width: 700px) {
        display: block;
      }
    `}

  ${props =>
    props.hideOnDesktop &&
    css`
      display: none;

      @media (max-width: 700px) {
        display: block;
      }
    `}
`;

const Icon = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 3rem;
  height: 3rem;
  margin-top: -1.5rem;

  @media (min-width: 700px) {
    &:first-child {
      margin-bottom: 2rem;
    }
  }

  ${props =>
    props.filterIcon &&
    css`
      left: 50%;
      margin-left: -1.5rem;
    `}
`;

const Input = styled.input`
  border: none;
  padding: 1rem 0 1rem 4rem;
  width: 100%;
  font-size: 2.5rem;
  color: #d9e021;
  font-weight: 600;
  outline: none;

  @media (min-width: 700px) {
    font-size: 1.6rem;
  }

  &::placeholder {
    color: #d9e021;
    font-weight: 100;
  }
`;

const CategoryTitle = styled.div`
  display: none;

  @media (min-width: 700px) {
    display: block;
    font-weight: 800;
    font-size: 1.6rem;
    padding-bottom: 2rem;
  }
`;
