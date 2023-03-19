// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Import CSS file
import "./index.css";
import { movies } from "./movies.js";
import Movie from "./Movie.js";

// Define a functional component called MovieList
const MovieList = () => {
  return (
    <>
    <h1>Netflix Best Movies</h1>
    <section className="movielist">
      {movies.map((movie, index) => {
        // Pass the movie object to the Movie component as props using the spread operator and assign a unique key to each component
        return <Movie {...movie} key={movie.id} number={index} />;
      })}
    </section>
    </>
  );
};

// Use ReactDOM to render the MovieList component to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MovieList />);
