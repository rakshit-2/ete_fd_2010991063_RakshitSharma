import './index.css';
import Navbar from '../navbar';
import { useState,useEffect } from 'react';
import Axios from 'axios';

const EachPageRecomm=(props)=>{

    const[Loading,setLoading]=useState(true);
    const[Display,setDisplay]=useState([])
  

    useEffect(() => {
      Axios.get('http://localhost:3001/home/recommended/get-data',
      {
          name:"check",
      }).then((res)=>{
        setDisplay(res.data);
        setLoading(false)
      });
    }, []);


return (
    <>
        <div className='each__outer'>
            <Navbar errModale={props.errModale} errText={props.errText} changeErrDisplay={props.changeErrDisplay} changeLogin={props.changeLogin} login={props.login} showErrorLogin={props.showErrorLogin}/>
            <div className='each__inner'>
                <div className='each__inner__head'>
                    Recommended Properties
                </div>
                <div className='each__inner__smallhead'>
                    Handpicked projects for you
                </div>
                <div className='each__inner__card'>

                </div>
            </div>
        </div>

    </>
);
}

export default EachPageRecomm;