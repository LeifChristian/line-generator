import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TestComp from './components/testComp';


const App = () => {
  return (
   
        <div><TestComp></TestComp></div>
  );
}

export default App;