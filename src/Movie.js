// Define a functional component called Movie that receives props
const Movie = (props) => {
  // Destructure the props to access the movie's image, title, and director
  const { img, title, director, number } = props;
  console.log(number);
  return (
    <section className="movie">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <h4>{director}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </section>
  );
};

export default Movie;
