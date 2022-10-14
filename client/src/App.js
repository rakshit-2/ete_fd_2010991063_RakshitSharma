
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Err from './components/organism/err/index';
import Home from './components/organism/home';
import Signin from './components/organism/signin';
import { useState } from 'react';


const App=(props)=>{

  const[login,setLogin]=useState(0);
  const[showErrorLogin,setShowErrorLogin]=useState(0);

  function changeLogin(x)
  {
    if(x==true)
    {
      setLogin(1);
    }
    else
    {
      setShowErrorLogin(1);
    }
  }


  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin  changeLogin={changeLogin} login={login} showErrorLogin={showErrorLogin}/>} ></Route>
        <Route path="/" element={<Home changeLogin={changeLogin} login={login} showErrorLogin={showErrorLogin}/>} ></Route>
        <Route path="/err" element={<Err/>} ></Route>
          <Route
              path="*"
              element={<Navigate to="/err" replace />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
