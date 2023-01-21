import React, { useState } from "react";

const Form = ({ nameHandler }) => {

  // 이름을 받아서 저장할 상태
  // input 태그 안에서 받아온 값을 저장헤서 App.js로 올려줘야 함
  const [newName, setNewName] = useState('');

  const onNameChange = (e) => {
    setNewName(e.target.value);
  }

  const onClickSubmit = () => {
    let newContent = newName;
    nameHandler(newContent);
  }

  return (
    <div>
      <input 
        onChange={onNameChange}
        placeholder='이름을 입력해주세요!'
      ></input>
      <button onClick={onClickSubmit}>Click</button>
    </div>
  );
}

export default Form;