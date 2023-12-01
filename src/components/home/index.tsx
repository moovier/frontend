import * as React from "react";

import Search from "../search";
import Movie from "../movie";
import AppHeader from "../app_header";
import BackdropWrapper from "../backdrop_wrapper";
import background from "../../assets/images/background.jpg";

import "./index.less";

interface Props {
  movies: any;
  genres: any;
  onPopularMovies: any;
  onSearch: any;
  onNewPageRequest: any;
  type: string;
  searchQuery: string;
}

class Home extends React.Component<Props> {
  componentWillUnmount() {
    // console.log("Going away");
  }

  render() {
    const {
      type,
      onPopularMovies,
      onSearch,
      searchQuery,
      movies,
      genres,
      onNewPageRequest,
    } = this.props;
    return (
      <BackdropWrapper image_path={`${background}`}>
        <AppHeader
          showButton={type === "search"}
          onPopularMovies={onPopularMovies}
        />
        <Search onSearch={onSearch} query={searchQuery} />
        <Movie
          movies={movies}
          genres={genres}
          onNewPageRequest={onNewPageRequest}
          title={type === "movie" ? "Popular Movies" : "Search Results"}
        />
      </BackdropWrapper>
    );
  }
}

export default Home;
