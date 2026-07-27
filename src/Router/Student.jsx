import React from "react";
import { useParams } from "react-router-dom";

const Student = () => {
  let { id, name } = useParams();
  return (
    <h1>
      Student - {id} {name}
    </h1>
  );
};

export default Student;
