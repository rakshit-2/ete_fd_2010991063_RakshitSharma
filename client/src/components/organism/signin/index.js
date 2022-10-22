import './index.css';
import * as React from 'react';
import { red } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './../navbar/index';
import signin_img1 from "./../../assets/images/home4.jpg";
import login_img1 from "./../../assets/images/home27.jpg";
import signin_img2 from "./../../assets/images/home2.jpg";
import login_img2 from "./../../assets/images/home12.jpg";

const Signin = (props) => 
{
    const navigate = useNavigate();

    const[displayLogin,setDisplayLogin]=useState({
                                                login:"flex",
                                                signup:"none"
    });

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')

    const [loginPass,setLoginPass]=useState('');
    const [loginEmail,setLoginEmail]=useState('');
    const [setTypeOfAccount, setSetTypeOfAccount] = React.useState({
                                                                buyer:0,
                                                                dealer:0,
    });
    const [email,setEmail]=useState('')
    const [emailBorder,setEmailBorder]=useState('none')
    const [pass,setPass]=useState('')
    const [passBorder,setPassBorder]=useState('none')
    const [showPass,setShowPass]=useState('password')
    const [eyeCount,setEyeCount]=useState(2)
    const [eyeDisplay,setEyeDisplay]=useState(<i style={{color:"#EF4B4D"}}  class="far fa-eye"></i>)
    const [flagEmail,setFlagEmail]=useState(0)
    const [flagPass,setFlagPass]=useState(0)
    const [flagFName,setFlagFName]=useState(0)
    const [flagLName,setFlagLName]=useState(0)
    // const [submitbuttonCursor,setSubmitbuttonCursor]=useState('not-allowed')

    const [len,setLen]=useState('block')
    const [num,setNum]=useState('block')
    const [spe,setSpe]=useState('block')
    const [upa,setUpa]=useState('block')



    function submitClicked()
    {
        console.log(setTypeOfAccount.buyer,setTypeOfAccount.dealer)
        if(flagEmail===1 && flagPass===1 && flagFName===1 && flagLName===1 && (setTypeOfAccount.buyer===1 || setTypeOfAccount.dealer===1))
        {
            if(setTypeOfAccount.buyer===1)
            {
                Axios.post('http://localhost:3001/signup/insert-data',
                {
                    fname:firstName,
                    lname:lastName,
                    email:email,
                    pass:pass,
                    check:"buyer"
                }).then((res)=>{
                    props.changeLogin(true,"buyer",email);
                    navigate('/');
                });
            }
            else
            {
                Axios.post('http://localhost:3001/signup/insert-data',
                {
                    fname:firstName,
                    lname:lastName,
                    email:email,
                    pass:pass,
                    check:"dealer"
                }).then((res)=>{
                    props.changeLogin(true,"dealer",email);
                    navigate('/');
                });
            }
        }
        else
        {
            console.log('fail');
        }
    }



    function LoginClicked()
    {
        if(loginEmail!=="" && loginPass!=="" && (setTypeOfAccount.buyer===1 || setTypeOfAccount.dealer===1))
        {
            if(setTypeOfAccount.buyer===1)
            {
                Axios.get('http://localhost:3001/login/check-data',
                {
                    params:{
                        email:loginEmail,
                        pass:loginPass,
                        check:"buyer",
                    }
                }).then((res)=>{
                    console.log("success ",res)
                    if(res.data.length!==0)
                    {
                        props.changeLogin(true,"buyer",loginEmail);
                        navigate('/');
                    }
                    else
                    {
                        console.log("login failed");
                    }
                    
                });
            }
           else{
            Axios.get('http://localhost:3001/login/check-data',
            {
                params:{
                    email:loginEmail,
                    pass:loginPass,
                    check:"dealer",
                }
            }).then((res)=>{
                console.log("success ",res)
                if(res.data.length!==0)
                {
                    props.changeLogin(true,"dealer",loginEmail);
                    navigate('/');
                }
                else
                {
                    console.log("login failed");
                }
                
            });
           }
        }
        else
        {
            console.log('fail');
        }
    }

    function emailcheck(e)
    {
        if(String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {   setEmailBorder('none');
            setEmail(String(e));
            setFlagEmail(1);
        }
        else
        {   setEmailBorder('2px solid #EF4B4D');
            setFlagEmail(0);}
    }

    function passcheck(e)
    {
        if(String(e).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/))
        {   setPassBorder('none');
            setPass(String(e));
            setFlagPass(1);
        }
        else
        {   setPassBorder('2px solid #EF4B4D');
            setFlagPass(0);    
        }
        if(String(e).match(/^.{8,}$/))
        {setLen('none')}
        else{setLen('block')}
        if(String(e).match(/\d/))
        {setNum('none')}
        else{setNum('block')}
        if(String(e).match(/.*[@$!%*?&#]/))
        {setSpe('none')}
        else{setSpe('block')}
        if(String(e).match(/.*[A-Z]/))
        {setUpa('none')}
        else{setUpa('block')}
    }
    
    function showPassButton()
    {
        if(eyeCount%2===0){
            setShowPass('text');
            setEyeDisplay(<i style={{color:"#EF4B4D"}}  class="far fa-eye-slash fa"></i>)
        }
        else{
            setShowPass('password');
            setEyeDisplay(<i style={{color:"#EF4B4D"}}  class="far fa-eye fa"></i>)
        }
        setEyeCount(eyeCount+1)
    }

    function fillfirstname(e)
    {
        setFirstName(String(e));
        setFlagFName(1);
    }

    function filllastname(e)
    {
        setLastName(String(e));
        setFlagLName(1);
    }

    return(
        <div className="signin-outer">
            <Navbar changeLogin={props.changeLogin} login={props.login} showErrorLogin={props.showErrorLogin}/>
            <div className="signin" style={{display:displayLogin.signup}}>
                <div className="signin-left">
                    <div className="signin-left-inner">
                        <div className="signin-heading">
                            Create new account
                        </div>
                        <div className="signin-login">
                            Already A Member?{'\u00A0'}<span style={{color:"#EF4B4D",cursor:"pointer"}}  onClick={()=>{setDisplayLogin({login:'flex',signup:'none'})}}>Login</span>
                        </div>
                        <div className="signin-name">
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" onChange={(e)=>{setSetTypeOfAccount({buyer:1,dealer:0})}} control={<Radio  sx={{
                                color: red[800],
                                
                                '&.Mui-checked': {
                                    color: red[600],
                                },
                                }} />} label="Buyer" />
                            <FormControlLabel value="male"  onChange={(e)=>{setSetTypeOfAccount({buyer:0,dealer:1})}} control={<Radio   sx={{
                                color: red[800],
                                '&.Mui-checked': {
                                    color: red[600],
                                },
                                }} />} label="Dealer" />
                        </RadioGroup>
                        </div>
                        <div className="signin-name">
                            <div className="name-outer">
                                <div className="name-label">
                                    First Name{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <input onChange={(e)=>{fillfirstname(e.target.value)}} type="text" placeholder="John" className="name-field" required='required'/>
                            </div>
                            <div className="name-outer">
                                <div className="name-label">
                                    Last Name{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <input onChange={(e)=>{filllastname(e.target.value)}} type="text" placeholder="Smith" className="name-field"  required='required'/>
                            </div>
                        </div>

                        <div className="signin-name">
                            <div className="email-outer">
                                <div className="email-label">
                                    Email Address{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}}  class="far fa-envelope-open"></i>
                                </div>
                                <input type="email" style={{border:emailBorder}} onChange={(e)=>{emailcheck(e.target.value)}} placeholder="abc@example.com" className="email-field"  required='required'/>
                            </div>
                        </div>

                        
                        
                        <div className="signin-name">
                            <div className="email-outer">
                                <div className="email-label">
                                    Password{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="fad fa-unlock-alt"></i>
                                </div>
                                <div className="pass-icon-field">
                                    <input type={showPass} style={{border:passBorder}} onChange={(e)=>{passcheck(e.target.value)}} placeholder="Abc$123" className="pass-field"  required='required'/>
                                    <div className="eyebutton" onClick={()=>{showPassButton()}}>
                                        {eyeDisplay}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="validation-pass" style={{display:len}}>
                            <i class="far fa-list-ol"></i>{'\u00A0'}Min 8 letters
                        </div>
                        <div className="validation-pass" style={{display:num}}>
                            <i class="far fa-sort-numeric-down"></i>{'\u00A0'}Number
                        </div>
                        <div className="validation-pass" style={{display:spe}}>
                            <i class="far fa-sparkles"></i> {'\u00A0'}Special Character
                        </div>
                        <div className="validation-pass" style={{display:upa}}>
                            <i class="fad fa-font-case"></i>  {'\u00A0'}Uppercase letter
                        </div>


                        <div className="signin-button-outer">
                            <div className="signin-button" onClick={()=>{submitClicked()}}>
                                Sign Up
                            </div>
                        </div>


                    </div>
                </div>

                <div className="signin-right">
                    <img src={signin_img1} className="signin-right-image1"/>
                    <img src={signin_img2} className="signin-right-image2"/>
                </div>
            </div>


            <div className="login" style={{display:displayLogin.login}}>
                

                <div className="signin-right">
                    <img src={login_img1} className="signin-right-image1"/>
                    <img src={login_img2} className="signin-right-image2"/>
                </div>
                <div className="signin-left">
                    <div className="signin-left-inner">
                        <div className="signin-heading">
                            Login To Account
                        </div>
                        <div className="signin-login">
                            Create A New Account!{'\u00A0'}<span style={{color:"#EF4B4D",cursor:"pointer"}} onClick={()=>{setDisplayLogin({login:'none',signup:'flex'})}}>Sign Up</span>
                        </div>

                        <div className="signin-name">
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" onChange={(e)=>{setSetTypeOfAccount({buyer:1,dealer:0})}} control={<Radio  sx={{
                                color: red[800],
                                
                                '&.Mui-checked': {
                                    color: red[600],
                                },
                                }} />} label="Buyer" />
                            <FormControlLabel value="male"  onChange={(e)=>{setSetTypeOfAccount({buyer:0,dealer:1})}} control={<Radio   sx={{
                                color: red[800],
                                '&.Mui-checked': {
                                    color: red[600],
                                },
                                }} />} label="Dealer" />
                        </RadioGroup>
                        </div>

                        <div className="signin-name">
                            <div className="email-outer">
                                <div className="email-label">
                                    Email Address{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}}  class="far fa-envelope-open"></i>
                                </div>
                                <input type="email" style={{border:emailBorder}} onChange={(e)=>{setLoginEmail(e.target.value)}} placeholder="abc@example.com" className="email-field"  required='required'/>
                            </div>
                        </div>

                        <div className="signin-name">
                            <div className="email-outer">
                                <div className="email-label">
                                    Password{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="fad fa-unlock-alt"></i>
                                </div>
                                <div className="pass-icon-field">
                                    <input type={showPass} style={{border:passBorder}} onChange={(e)=>{setLoginPass(e.target.value)}} placeholder="Abc$123" className="pass-field"  required='required'/>
                                    <div className="eyebutton" onClick={()=>{showPassButton()}}>
                                        {eyeDisplay}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="signin-button-outer">
                            <div className="signin-button" onClick={()=>{LoginClicked()}}>
                                Login
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;