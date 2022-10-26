import './index.css';
import Navbar from '../navbar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import LoadingScreen from '../../atom/loadingScreen';
import ExpertCard1 from '../../atom/expertCard1';

const EachPageExpert=(props)=>{

    const[Loading,setLoading]=useState(true);
    const[Display,setDisplay]=useState([])
  

    useEffect(() => {
      Axios.get('http://localhost:3001/home/profile/get-data',
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
                    Housing Experts
                </div>
                <div className='each__inner__smallhead'>
                Sellers with complete knowledge about locality and verified listings   
                </div>
                {
                Loading ? (
                    <div className='loading__outer' style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <LoadingScreen/>    
                    </div>
                    
                ):(
                    <div className='each__inner__card' style={{width:"100%",marginBottom:"none",overflowY:"scroll",justifyContent:"space-around",height:"fit-content",display:'flex',flexWrap:"wrap",paddingTop:"3rem"}}>
                    {Display.map((ele)=>{
                        const{id,fname,lname,image,description,exp_year,sold_prop}=ele;
                        var name=fname+" "+lname;
                        return(
                            <ExpertCard1 id={id} name={name} image={image} description={description} exp_year={exp_year} sold_prop={sold_prop} flag={1} eachPageFlag={1}/>
                        )
                    })}   
                    </div>
                )
            }
            </div>
        </div>

    </>
);
}

export default EachPageExpert;