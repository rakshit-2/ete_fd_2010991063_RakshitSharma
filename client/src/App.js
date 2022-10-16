
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
import Profile from './components/organism/profile';





import { useState } from 'react';


const App=(props)=>{

  const[login,setLogin]=useState(0);
  const[loginTypeCheck,setLoginTypeCheck]=useState({
                                              dealer:0,
                                              buyer:0,
  })
  const[showErrorLogin,setShowErrorLogin]=useState(0);
  const[loginEmail,setLoginEmail]=useState("")

  function changeLogin(x,check,email)
  {
    if(x==true)
    {
      if(check==="dealer")
      {
        setLoginTypeCheck({dealer:1,buyer:0})
      }
      else
      {
        setLoginTypeCheck({dealer:0,buyer:1})
      }
      setLoginEmail(email);
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
        <Route path="/profile" element={<Profile loginEmail={loginEmail} changeLogin={changeLogin} login={login} showErrorLogin={showErrorLogin}/>} ></Route>
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
