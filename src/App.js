// App.js

import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Login from './Sample/Log';
import SignUp from './Sample/Signup';
import './App.css';
import React, { useRef } from 'react';

const App = () => {
  return (
  <div>

    <BrowserRouter>
    <ul>
      <li>
        <Link to='/log'>login</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
    </ul>
        <Routes>
        <Route exact path="/log" component={Login} ></Route>
        <Route path="/signup" component={SignUp} ></Route>
    </Routes>
      
    </BrowserRouter>
  </div>
  );
};

export default App;
