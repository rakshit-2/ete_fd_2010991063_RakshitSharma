import './index.css';
import logo from './../../assets/images/logo.jpg';
import navData from './../../assets/store/navData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar=(props)=>{

    const navigate = useNavigate();
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() 
    {
        if (document.body.scrollTop>80 || document.documentElement.scrollTop>80) 
        {
            document.getElementById("nav").style.backgroundColor="white";
            document.getElementById("nav").style.boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
        }
        else
        {
            document.getElementById("nav").style.boxShadow="none";
            document.getElementById("nav").style.backgroundColor="rgba(86, 86, 86, 0)";
        }
    }

















    function navButtonClicked(x)
    {
        if(x==="News")
        {
            navigate('/news');
        }
        else if(x==="Post Property")
        {
            if(props.login!==1)
            {
                console.log("login first")
            }
        }
        else if(x==="login")
        {
            navigate('/login-signiup')
        }
        else if(x==="profile")
        {
            if(props.login!==1)
            {
                console.log("login first")
            }
        }
    }


    return (
        <>
        <div className='navbar__outer' id="nav">
            <div className='navbar__inner'>
                <div className='navbar__inner__left'>
                    <div className='navbar__inner__left__logo'>
                        <img src={logo} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                    </div>
                    <div className='navbar__inner__left__heading'>
                        HomePros
                    </div>
                </div>
            


                <div className='navbar__inner__right'>
                    {navData.map((ele)=>{
                        const{id,name,link}=ele;
                        return(
                            <div key={id} className='navbar__inner__right__each' onClick={()=>{navButtonClicked(name)}}>
                                {name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;