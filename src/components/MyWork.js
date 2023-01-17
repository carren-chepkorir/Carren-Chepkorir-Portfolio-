import React from "react";

import "./styles/MyWork.css";
const MyWork = ({ works }) => {
  const { title, description, image, tags, source, visit } = works;

  return (
    <div className="mywork">
      <div className="work-section">
        <div className="cards">
          <img src={image} alt={image} />

          <div className="details">
            <h1>{title}</h1>
            <p>{description}</p>
            <p className="tag">{tags}</p>
            <a href={source} className="btn">
              Source code
            </a>
            <a href={visit} className="btn">
              View Source
            </a>

            <button>See my work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
