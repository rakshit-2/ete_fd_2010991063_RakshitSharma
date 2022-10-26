import * as React from 'react';
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
import Search from './components/organism/search';
import EachPageRecomm from './components/organism/eachPageRecomm';
import EachPageExpert from './components/organism/eachPageExpert';
import EachPageDemand from './components/organism/eachPageDemand';

import Axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'


import { useState,useEffect } from 'react';


const App=(props)=>{
  AOS.init({
    offset: 100,
    duration: 500,
    easing: 'ease-in-sine',
  });

  const[login,setLogin]=useState(0);
  const[loginTypeCheck,setLoginTypeCheck]=useState({
                                              dealer:0,
                                              buyer:0,
  })
  const[showErrorLogin,setShowErrorLogin]=useState(0);
  const[loginEmail,setLoginEmail]=useState("")


  console.log(loginEmail)


  const[errModale,setErrModale]=useState("none");
  const[errText,setErrText]=useState('');




  const [valueBudget, setValueBudget] = React.useState([1, 50]);

  const [checkedAll, setCheckedAll] = React.useState(false);
  const [checked1bhk, setChecked1bhk] = React.useState(false);
  const [checked2bhk, setChecked2bhk] = React.useState(false);
  const [checked3bhk, setChecked3bhk] = React.useState(false);
  const [checked4bhk, setChecked4bhk] = React.useState(false);
  const [checked5bhk, setChecked5bhk] = React.useState(false);

  const [constructionCheckAll, setConstructionCheckAll] = React.useState(false);
  const [constructionCheckUnder, setConstructionCheckUnder] = React.useState(false);
  const [constructionCheckReady, setConstructionCheckReady] = React.useState(false);

  const [checkedTypeofAll, setCheckedTypeofAll] = React.useState(false);
  const [checkedTypeofFlat, setCheckedTypeofFlat] = React.useState(false);
  const [checkedTypeofIndependentFloor, setCheckedTypeofIndependentFloor] = React.useState(false);
  const [checkedTypeofIndependentHouse, setCheckedTypeofIndependentHouse] = React.useState(false);
  const [checkedTypeofResidentialLand, setCheckedTypeofResidentialLand] = React.useState(false);
  const [checkedTypeofFarm, setCheckedTypeofFarm] = React.useState(false);
  const [checkedTypeofServisedApart, setCheckedTypeofServisedApart] = React.useState(false);
  
  const[val,setVal]=useState("");
  const[valField,setValField]=useState("");



  function changeSetVal(x)
  {
    setVal(x)
  }
  function changeSetValField(x)
  {
    setValField(x)
  }
  
  function myStopFunction() 
  {
    setErrModale("none");
  }

  function changeErrDisplay(x)
  {
    setErrModale("flex");
    setErrText(x);
    setTimeout(myStopFunction, 3000);
  }
  




  function changeLogin(x,check,email)
  {
    if(x==true)
    {
      setLoginEmail(email);
      setLogin(1);
      changeErrDisplay("Login Success");
      if(check==="dealer")
      {
        setLoginTypeCheck({dealer:1,buyer:0})
      }
      else
      {
        setLoginTypeCheck({dealer:0,buyer:1})
      }
      
    }
    else
    {
      changeErrDisplay("Login Failed");
      setShowErrorLogin(1);
    }
  }









  function handleChangeCheckbox(x,check)
  {
      switch(x) {
          case 0:
              setChecked1bhk(check);
            break;
          case 1:
              setChecked2bhk(check);
              break;
          case 2:
              setChecked3bhk(check);
              break
          case 3:
              setChecked4bhk(check);
              break;
          case 4:
              setChecked5bhk(check);
              break;
          default:
            console.log("fuck u")
        }
  }
  
  
  
  function handleChangeCheckboxConstruction(x,check)
  {
      switch(x) {
          case 0:
              setConstructionCheckUnder(check);
            break;
          case 1:
              setConstructionCheckReady(check);
              break;
          default:
            console.log("fuck u")
        }
  }
  
  
  
  function handleChangeCheckboxTypeof(x,check)
  {
      switch(x) {
          case 0:
              setCheckedTypeofFlat(check);
            break;
          case 1:
              setCheckedTypeofIndependentFloor(check);
              break;
          case 2:
              setCheckedTypeofIndependentHouse(check);
          break;
          case 3:
              setCheckedTypeofResidentialLand(check);
          break;
          case 4:
              setCheckedTypeofFarm(check);
              break;
          case 5:
              setCheckedTypeofServisedApart(check);
              break;
          default:
            console.log("fuck u")
        }
  }
  
  
  const handleChangeSlider = (event, newValue) => {
      setValueBudget(newValue);
    };




    











  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin errModale={errModale} errText={errText} changeErrDisplay={changeErrDisplay} changeLogin={changeLogin} login={login} showErrorLogin={showErrorLogin}/>} ></Route>
        <Route path="/profile" element={<Profile  errModale={errModale} errText={errText} changeErrDisplay={changeErrDisplay} loginEmail={loginEmail} changeLogin={changeLogin} login={login} showErrorLogin={showErrorLogin}/>} ></Route>
        <Route path="/each-page-recomm" element={<EachPageRecomm  errModale={errModale} errText={errText} changeErrDisplay={changeErrDisplay} loginEmail={loginEmail} changeLogin={changeLogin} login={login} showErrorLogin={showErrorLogin}/>} ></Route>
        <Route path="/each-page-expert" element={<EachPageExpert  errModale={errModale} errText={errText} changeErrDisplay={changeErrDisplay} loginEmail={loginEmail} changeLogin={changeLogin} login={login} showErrorLogin={showErrorLogin}/>} ></Route>
        <Route path="/each-page-demand" element={<EachPageDemand  errModale={errModale} errText={errText} changeErrDisplay={changeErrDisplay} loginEmail={loginEmail} changeLogin={changeLogin} login={login} showErrorLogin={showErrorLogin}/>} ></Route>
        <Route path="/search" element={
        <Search 
          errModale={errModale} errText={errText} changeErrDisplay={changeErrDisplay}
          changeLogin={changeLogin} 
          login={login} 
          showErrorLogin={showErrorLogin}
          valueBudget={valueBudget}
          handleChangeSlider={handleChangeSlider}
          handleChangeCheckboxTypeof={handleChangeCheckboxTypeof}
          handleChangeCheckboxConstruction={handleChangeCheckboxConstruction}
          handleChangeCheckbox={handleChangeCheckbox}
          val={val}
          valField={valField}
          checkArr={[checked1bhk,checked2bhk,checked3bhk,checked4bhk,checked5bhk]}
          constructionArr={[constructionCheckUnder,constructionCheckReady]}
          typeofArr={[checkedTypeofFlat,checkedTypeofIndependentFloor,checkedTypeofIndependentHouse,checkedTypeofResidentialLand
          ,checkedTypeofFarm,checkedTypeofServisedApart]}
        />} ></Route>
        <Route path="/" element={
        <Home 
        errModale={errModale} errText={errText} changeErrDisplay={changeErrDisplay}
          changeLogin={changeLogin} 
          login={login} 
          showErrorLogin={showErrorLogin}
          valueBudget={valueBudget}
          handleChangeSlider={handleChangeSlider}
          handleChangeCheckboxTypeof={handleChangeCheckboxTypeof}
          handleChangeCheckboxConstruction={handleChangeCheckboxConstruction}
          handleChangeCheckbox={handleChangeCheckbox}
          changeSetVal={changeSetVal}
          changeSetValField={changeSetValField}
          val={val}
          valField={valField}
          checkArr={[checked1bhk,checked2bhk,checked3bhk,checked4bhk,checked5bhk]}
          constructionArr={[constructionCheckAll,constructionCheckUnder,constructionCheckReady]}
          typeofArr={[checkedTypeofAll,checkedTypeofFlat,checkedTypeofIndependentFloor,checkedTypeofIndependentHouse,checkedTypeofResidentialLand
                      ,checkedTypeofFarm,checkedTypeofServisedApart]}
        />} ></Route>
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
