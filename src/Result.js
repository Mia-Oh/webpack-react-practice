import React from "react";

const Result = ({ name }) => {

  const percent = Math.floor(Math.random() * 100)

  return (
    <div>
      <p>{name} 님 과의 궁합도는 {percent}%</p>
    </div>
  );
}

export default Result;