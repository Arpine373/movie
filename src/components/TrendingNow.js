import React from "react";
import "./TrendingNow.css";

const TrendingNow = ({ movies }) => {
  return (
    <div className="trending-section">
      <h2>Trending Now</h2>
      <div className="trending-list">
        {movies.map((movie) => (
          <img
            key={movie.Id}
            src={movie.CoverImage}
            alt={movie.Title}
            className="trending-poster"
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
