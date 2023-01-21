import React, { useState } from "react";
import Result from "./Result";
import Form from "./Form";
import "./App.css"

const App = () => {

  const [name, setName] = useState('이상형');

  // 상태를 변경하는 함수
  const nameHandler = (newContent) => {
    setName(newContent);
  }


  return (
    <div id="container">
      <h1>궁합 계산기</h1>
      <Form 
        nameHandler={nameHandler}
      />
      <Result 
        name={name}
      />
    </div>
  );
}

export default App;