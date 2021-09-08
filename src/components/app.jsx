import React, { Component } from "react";
import Header from "./header";
import Movies from "./movies";
import { getMovies } from "../fakeMovieService";

class App extends Component {
	state = {
		author: "@HatamovichCodes",
		title: "My Vidly Application",
		description: "This application was built with React.js",
		movies: getMovies(),
	};

	removeMovie = (movieId) => {
		const movies = this.state.movies.filter((movie) => movie._id !== movieId);

		this.setState({ movies });
	};

	likeMovie = (likedMovie) => {
		likedMovie.liked = !likedMovie.liked;

		const movies = [...this.state.movies];
		const i = movies.indexOf(likedMovie);

		movies[i] = { ...likedMovie };

		this.setState({ movies });
	};

	render() {
		const { author, title, description, movies } = this.state;

		return (
			<div className="app">
				<Header
					author={author}
					appTitle={title}
					appDescription={description}
					moviesCount={movies.length}
				/>
				<Movies
					movies={movies}
					onDelete={this.removeMovie}
					onLike={this.likeMovie}
				/>
			</div>
		);
	}
}

export default App;
