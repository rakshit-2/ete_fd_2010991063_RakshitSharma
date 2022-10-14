import * as React from 'react';
import './index.css';
import Navbar from '../navbar';

import HomeData from './../../assets/store/homeData';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import HomeSection1 from './../../molecule/HomeSection1/index';
import RecommProp from '../../molecule/RecommProp';
import FeaturedCollection from '../../molecule/FeaturedCollection';
import ProjectDemand from './../../molecule/ProjectDemand';
import News from './../../molecule/news';
import ExpertDisplay from '../../molecule/ExpertDisplay';
import ads1 from './../../assets/images/ads1.png'







const Home=(props)=>{
    const navigate = useNavigate();
    const[val,setVal]=useState("");
    const[valField,setValField]=useState("");
    const[filterDisplay,setFilterDisplay]=useState({
                                            budget:"none",
                                            bedroom:"none",
                                            construction:"none",
                                            type:"none",
    });
    const [valueBudget, setValueBudget] = React.useState([0, 100]);

    const [checkedAll, setCheckedAll] = React.useState([false]);
    const [checked1bhk, setChecked1bhk] = React.useState([false]);
    const [checked2bhk, setChecked2bhk] = React.useState([false]);
    const [checked3bhk, setChecked3bhk] = React.useState([false]);
    const [checked4bhk, setChecked4bhk] = React.useState([false]);
    const [checked5bhk, setChecked5bhk] = React.useState([false]);


    const [constructionCheckAll, setConstructionCheckAll] = React.useState([false]);
    const [constructionCheckUnder, setConstructionCheckUnder] = React.useState([false]);
    const [constructionCheckReady, setConstructionCheckReady] = React.useState([false]);

    const [checkedTypeofAll, setCheckedTypeofAll] = React.useState([false]);
    const [checkedTypeofFlat, setCheckedTypeofFlat] = React.useState([false]);
    const [checkedTypeofIndependentFloor, setCheckedTypeofIndependentFloor] = React.useState([false]);
    const [checkedTypeofIndependentHouse, setCheckedTypeofIndependentHouse] = React.useState([false]);
    const [checkedTypeofResidentialLand, setCheckedTypeofResidentialLand] = React.useState([false]);
    const [checkedTypeofFarm, setCheckedTypeofFarm] = React.useState([false]);
    const [checkedTypeofServisedApart, setCheckedTypeofServisedApart] = React.useState([false]);
    






  
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
        renderInput={(params) => <TextField {...params} label="Locality, Sector" />}
        />
    )
}



function valuetext(value) {
    return `${value}`;
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


function filterEachClicked(x)
{
    if(x==="Budget")
    {
        setFilterDisplay({ budget:"flex",
                bedroom:"none",
                construction:"none",
                type:"none",
        })
    }
    else if(x==="Bedroom")
    {
        setFilterDisplay({ budget:"none",
                bedroom:"flex",
                construction:"none",
                type:"none",
        })
    }
    else if(x==="Construction Status")
    {
        setFilterDisplay({ budget:"none",
                bedroom:"none",
                construction:"flex",
                type:"none",
        })
    }
    else if(x==="Type Of")
    {
        setFilterDisplay({ budget:"none",
                bedroom:"none",
                construction:"none",
                type:"flex",
        })
    }

}



function handleChangeCheckbox(x,check)
{
    switch(x) {
        case 0:
            setCheckedAll([check]);
          break;
        case 1:
            setChecked1bhk([check]);
          break;
        case 2:
            setChecked2bhk([check]);
            break;
        case 3:
            setChecked3bhk([check]);
            break
        case 4:
            setChecked4bhk([check]);
            break;
        case 5:
            setChecked5bhk([check]);
            break;
        default:
          console.log("fuck u")
      }
}



function handleChangeCheckboxConstruction(x,check)
{
    switch(x) {
        case 0:
            setConstructionCheckAll([check]);
          break;
        case 1:
            setConstructionCheckUnder([check]);
          break;
        case 2:
            setConstructionCheckReady([check]);
            break;
        default:
          console.log("fuck u")
      }
}



function handleChangeCheckboxTypeof(x,check)
{
    switch(x) {
        case 0:
            setCheckedTypeofAll([check]);
          break;
        case 1:
            setCheckedTypeofFlat([check]);
          break;
        case 2:
            setCheckedTypeofIndependentFloor([check]);
            break;
        case 3:
            setCheckedTypeofIndependentHouse([check]);
        break;
        case 4:
            setCheckedTypeofResidentialLand([check]);
        break;
        case 5:
            setCheckedTypeofFarm([check]);
            break;
        case 6:
            setCheckedTypeofServisedApart([check]);
            break;
        default:
          console.log("fuck u")
      }
}


const handleChangeSlider = (event, newValue) => {
    setValueBudget(newValue);
  };

return (
    <>
    <div className='home__outer'>
        <div className='home__inner'>
            <Navbar changeLogin={props.changeLogin} login={props.login} showErrorLogin={props.showErrorLogin}/>
            
            
            <HomeSection1/>


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
                            <div key={id} className='home__inner__seaction2__inner__top__each2' onClick={()=>{filterEachClicked(name)}}>
                                {name} {'\u00A0'} {'\u00A0'} <img src={img} style={{width:"10px",height:"6px"}}/>
                            </div>
                            )
                        })}   
                    </div>
                    <div className='home__inner__seaction2__inner__bottom__under__all' style={{display:filterDisplay.budget}}>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head'>
                            Select Price Range
                        </div>  
                        <div className='home__inner__seaction2__inner__bottom__under__all__value'>
                            {valueBudget[0]}{'\u00A0'}Lacs {'\u00A0'} - {'\u00A0'} {valueBudget[1]}{'\u00A0'}Lacs
                        </div> 
                        <Slider
                        value={valueBudget}
                        onChange={handleChangeSlider}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        />
                    </div>
                    <div className='home__inner__seaction2__inner__bottom__under__all2' style={{display:filterDisplay.bedroom}}>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{marginBottom:"1rem"}}>
                            Number of Bedrooms
                        </div>  
                        <FormGroup aria-label="position" row>
                            {HomeData.check_panel.map((ele)=>{
                                const{id,name}=ele;
                                return(
                                    <FormControlLabel
                                        key={id}
                                        value={name}
                                        control={<Checkbox />}
                                        onChange={(e)=>{handleChangeCheckbox(id,e.target.checked)}}
                                        label={name}
                                        labelPlacement="end"
                                     />
                                )
                            })}   
                        </FormGroup>
                    </div>
                    <div className='home__inner__seaction2__inner__bottom__under__all2' style={{display:filterDisplay.construction}}>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{marginBottom:"1rem"}}>
                            Construction Status
                        </div>  
                        <FormGroup aria-label="position" row>
                            {HomeData.check_panel_construction.map((ele)=>{
                                const{id,name}=ele;
                                return(
                                    <FormControlLabel
                                        key={id}
                                        value={name}
                                        control={<Checkbox />}
                                        onChange={(e)=>{handleChangeCheckboxConstruction(id,e.target.checked)}}
                                        label={name}
                                        labelPlacement="end"
                                     />
                                )
                            })}   
                        </FormGroup>
                    </div>
                    <div className='home__inner__seaction2__inner__bottom__under__all3' style={{display:filterDisplay.type,height:'10rem'}}>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{marginBottom:"1rem"}}>
                            Type of Property
                        </div>  
                        <FormGroup aria-label="position" row>
                            {HomeData.check_panel_typeof.map((ele)=>{
                                const{id,name}=ele;
                                return(
                                    <FormControlLabel
                                        key={id}
                                        value={name}
                                        control={<Checkbox />}
                                        onChange={(e)=>{handleChangeCheckboxTypeof(id,e.target.checked)}}
                                        label={name}
                                        labelPlacement="end"
                                     />
                                )
                            })}   
                        </FormGroup>
                    </div>
                </div>
            </div>


            <FeaturedCollection/>
            <RecommProp/>
            <ExpertDisplay/>
            <ProjectDemand/>
            <News/>
            
        </div>
    </div>
    
    </>
);
}

export default Home;