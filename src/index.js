// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Import CSS file
import "./index.css";

// Define an array of movie objects
const movies = [
  {
    director: "Aziz Zoromba",
    title: "Faraway",
    img: "./images/movie-2.jpg",
    id: 1,
  },
  {
    director: "Christopher Landon",
    title: "We Have a Ghost",
    img: "./images/movie-3.jpg",
    id: 2,
  },
];

// Define a functional component called MovieList
const MovieList = () => {
  // Use the map function to iterate over the movies array and return a Movie component for each movie object
  return (
    <section className="movielist">
      {movies.map((movie) => {
        // Pass the movie object to the Movie component as props using the spread operator and assign a unique key to each component
        return <Movie {...movie} key={movie.id} />;
      })}
    </section>
  );
};

// Define a functional component called Movie that receives props
const Movie = (props) => {
  // Destructure the props to access the movie's image, title, and director
  const { img, title, director } = props;
  // Log the props to the console
  console.log(props);
  // Render the movie's image, title, and director
  return (
    <section className="movie">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <h4>{director}</h4>
    </section>
  );
};

// Use ReactDOM to render the MovieList component to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MovieList />);
