import './index.css';
import Navbar from '../navbar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import LoadingScreen from '../../atom/loadingScreen';
import RecommCard1 from '../../atom/recommCard1';

const EachPageDemand=(props)=>{

    const[Loading,setLoading]=useState(true);
    const[Display,setDisplay]=useState([])
  

    useEffect(() => {
      Axios.get('http://localhost:3001/home/project/get-data',
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
                Recommended Projects
                </div>
                <div className='each__inner__smallhead'>
                The most searched projects
                </div>
                {
                Loading ? (
                    <div className='loading__outer' style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <LoadingScreen/>    
                    </div>
                    
                ):(
                    <div className='each__inner__card' style={{width:"100%",marginBottom:"none",overflowY:"scroll",height:"fit-content",display:'flex',justifyContent:"space-around",flexWrap:"wrap",paddingTop:"3rem"}}>
                    {Display.map((ele)=>{
                        const{id,image,title,description,price,area,bhk,type_of,
                            construction_status,furnished_status,verefied,global_type,purchase_status}=ele;
                        return(
                            <RecommCard1  eachPageFlag={1} flag={1}  id={id} image={image} title={title} description={description} price={price} bhk={bhk}/>
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

export default EachPageDemand;