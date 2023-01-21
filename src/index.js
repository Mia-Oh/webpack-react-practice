import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";

// React version 18 이라서 creatRoot를 써야함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);