import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const MovieList = () => {
  return (
    <section className="movielist">
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </section>
  );
};

const Movie = () => {
  return (
    <section className="movie">
      <Image />
      <Title />
      <Director />
    </section>
  );
};

const Image = () => (
  <img src="./images/movie-1.jpg" alt="	Luther: The Fallen Sun" />
);

const Title = () => <h2> Luther: The Fallen Sun</h2>;

const Director = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jamie Payne</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MovieList />);
