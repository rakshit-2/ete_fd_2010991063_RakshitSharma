import './index.css';
import ExpertCard1 from './../../atom/expertCard1';
import HomeData from '../../assets/store/homeData';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import Axios from 'axios';
import { useState,useEffect } from 'react';
import LoadingScreen from '../../atom/loadingScreen';





const ExpertDisplay=(props)=>{


    const[expertLoading,setExpertLoading]=useState(true);
    const[expertDisplay,setExpertDisplay]=useState([])
  
  
  
    useEffect(() => {
      Axios.get('http://localhost:3001/home/profile/get-data',
      {
          name:"check",
      }).then((res)=>{
        setExpertDisplay(res.data);
        setExpertLoading(false)
      });
    }, []);


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1181 },
          items: 3,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1181, min: 750 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 749, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
return (
    <>
    <div className='recomm__outer'>
        <div className='recomm__inner'>
            <div className='recomm__inner__heading'>
                Housing Experts
            </div>
            <div className='recomm__inner__heading__small'>
            Sellers with complete knowledge about locality and verified listings    
            </div>
            <div className='recomm__inner__display'>
            {
                expertLoading ? (
                    <div className='loading__outer' style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <LoadingScreen/>    
                    </div>
                    
                ):(
                <Carousel 
                    responsive={responsive} 
                    draggable
                    pauseOnHover
                    infinite
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                    {expertDisplay.map((ele)=>{
                        const{id,fname,lname,image,description,exp_year,sold_prop}=ele;
                        var name=fname+" "+lname;
                        return(
                            <ExpertCard1 id={id} name={name} image={image} description={description} exp_year={exp_year} sold_prop={sold_prop} flag={1}/>
                        )
                    })}  
                </Carousel>
                )
            }
            </div>
        </div>
    </div>
    </>
);
}

export default ExpertDisplay;