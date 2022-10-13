import * as React from 'react';
import './index.css';
import Navbar from '../navbar';
import back1 from './../../assets/images/back1.jpg'
import back11 from './../../assets/images/back11.png'
import back2 from './../../assets/images/back2.jpg'
import back3 from './../../assets/images/back3.jpg'
import back4 from './../../assets/images/back4.jpg'
import HomeData from './../../assets/store/homeData';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home=(props)=>{
    const navigate = useNavigate();
    const[val,setVal]=useState("");
    const[valField,setValField]=useState("");

try{
    console.log(val);
}
catch(err)
{
    setVal("Location");
}
try{
    console.log(valField);
}
catch(err)
{
    setValField("Landmark,Locality");
}
    
function placebar()
{
    var li;
    if(val==="Chandigarh")
    {
        li=HomeData.Chandigarh;
    }
    else if(val==="Panchkula")
    {
        li=HomeData.Panchkula;
    }
    else if(val==="Zirakpur")
    {
        li=HomeData.Zirakpur;
    }
    else if(val==="Ambala")
    {
        li=HomeData.Ambala;
    }
    else if(val=="Mohali"){
        li=HomeData.Mohali;
    }
    else{
        li=HomeData.null;
    }
    return(
        <Autocomplete
        disablePortal
        defaultValue={null}
        id="combo-box-demo"
        options={li}
        value={valField}
        onChange={(event: any, newVal:string | null)=>setValField(newVal.label)}
        renderInput={(params) => <TextField {...params} label="Place" />}
        />
    )
}


function searchClicked()
{
    if(val==="" || valField==="")
    {
        console.log("error");
    }
    else{
        navigate('/search-property')
    }
}

return (
    <>
    <div className='home__outer'>
        <div className='home__inner'>
            <Navbar changeLogin={props.changeLogin} login={props.login} showErrorLogin={props.showErrorLogin}/>
            
            <div id="carouselExampleSlidesOnly"style={{width:"100%",height:"35rem",zIndex:"0"}}  class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" style={{width:"100%",height:"35rem",zIndex:"0"}} src={back1} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" style={{width:"100%",height:"35rem",zIndex:"0"}} src={back2} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" style={{width:"100%",height:"35rem",zIndex:"0"}} src={back3} alt="Third slide"/>
                    </div>
                </div>
            </div>



            <div className='home__inner__seaction2'>
                <div className='home__inner__seaction2__inner'>
                    <div className='home__inner__seaction2__inner__top'>
                        {HomeData.search_panel.map((ele)=>{
                            const{id,name}=ele;
                            return(
                            <div key={id} className='home__inner__seaction2__inner__top__each'>
                                {name}
                            </div>
                            )
                        })}   
                    </div>
                    <div className='home__inner__seaction2__inner__bottom'>
                        <div className='home__inner__seaction2__inner__bottom__select'>
                            <Autocomplete
                            disablePortal
                            defaultValue={null}
                            id="combo-box-demo"
                            options={HomeData.select_field}
                            value={val}
                            onChange={(event: any, newVal:string | null)=>setVal(newVal.label)}
                            renderInput={(params) => <TextField {...params} label="Place" />}
                            />
                        </div>
                        <div className='home__inner__seaction2__inner__bottom__field'>
                            {placebar()}
                        </div>
                        <div className='home__inner__seaction2__inner__bottom__button' onClick={()=>{searchClicked()}}>
                            Search
                        </div>
                    </div>
                    <div className='home__inner__seaction2__inner__bottom__under'>
                        {HomeData.filter_panel.map((ele)=>{
                            const{id,name,img}=ele;
                            return(
                            <div key={id} className='home__inner__seaction2__inner__top__each2'>
                                {name} {'\u00A0'} <img src={img} style={{width:"10px",height:"10px"}}/>
                            </div>
                            )
                        })}   
                    </div>
                </div>
            </div>







        </div>
    </div>
    
    </>
);
}

export default Home;