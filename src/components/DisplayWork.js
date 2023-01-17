import React from "react";
import Work from "../Data";
import MyWork from "./MyWork";

const DisplayWork = () => {
  return (
    <section>
      {Work.map((works) => (
        <MyWork works={works} key={works.id} />
      ))}
    </section>
  );
};

export default DisplayWork;
