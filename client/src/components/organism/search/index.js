import './index.css';
import * as React from 'react';
import Navbar from '../navbar';
import Slider from '@mui/material/Slider';
import HomeData from './../../assets/store/homeData';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SearchData from '../../assets/store/searchData';
import SearchCard1 from '../../atom/searchCard1';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import LoadingScreen from './../../atom/loadingScreen/index';

const Search=(props)=>{

    const[all,setAll]=useState([]);
    const[displayer,setDisplayer]=useState();
    const[loading,setLoading]=useState(true)

    useEffect(() => {
        Axios.get('http://localhost:3001/search/get-data',
        {
            name:"check",
        }).then((res)=>{
            setAll(res.data);
            setDisplayer(res.data);
            setLoading(false);
        });
      }, []);



    function valuetext(value) {
        return `${value}`;
    }
    const[searchLoading,setSearchLoading]=useState(true)
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const[verefied,setVerefied]=React.useState(false);

    const [furnished, setFurnished] = React.useState(false);
    const [semiFurnished, setSemiFurnished] = React.useState(false);
    const [unfurnished, setUnfurnished] = React.useState(false);

    function handleFurnishedStatus(x,check)
    {
        switch(x) {
            case 0:
                setFurnished(check);
              break;
            case 1:
                setSemiFurnished(check);
                break;
            case 2:
                setUnfurnished(check);
                break
            default:
              console.log("fuck u")
          }
    }


    const[highDemand,setHighDemand]=React.useState(false);
    const[recommended,setRecommended]=React.useState(false);
    const[photos,setPhotos]=React.useState(false);

    const [valueArea, setValueArea] = React.useState([1, 4000]);
    const handleChangeSliderArea = (event, newValue) => {
        setValueArea(newValue);
    };





    function changeFilter()
    {

    }
return (
    <>
    <div className='search__outer'>
    <Navbar changeLogin={props.changeLogin} login={props.login} showErrorLogin={props.showErrorLogin}/>
        <div className='search__inner'>
            <div className='search__inner__left'>
                <div className='search__inner__left__top'>
                    <div className='filter__each'>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head'>
                            Select Price Range
                        </div>  
                        <div className='home__inner__seaction2__inner__bottom__under__all__value'>
                            {props.valueBudget[0]}{'\u00A0'}Cr {'\u00A0'} - {'\u00A0'} {props.valueBudget[1]}{'\u00A0'}Cr
                        </div>
                        <div className='filter__each__slider'  style={{width:"60%"}}>
                            <Slider
                                value={props.valueBudget}
                                onChange={props.handleChangeSlider}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                min={1}
                                max={100}
                            />
                        </div>
                    </div>



                    <div className='filter__each'>
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
                                        checked={props.checkArr[id]}
                                        control={<Checkbox />}
                                        onChange={(e)=>{props.handleChangeCheckbox(id,e.target.checked)}}
                                        label={name}
                                        labelPlacement="end"
                                     />
                                )
                            })}   
                        </FormGroup>
                    </div>

                    <div className='filter__each'>
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
                                        checked={props.constructionArr[id]}
                                        control={<Checkbox />}
                                        onChange={(e)=>{props.handleChangeCheckboxConstruction(id,e.target.checked)}}
                                        label={name}
                                        labelPlacement="end"
                                     />
                                )
                            })}   
                        </FormGroup>
                    </div>



                    <div className='filter__each'>
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
                                        checked={props.typeofArr[id]}
                                        onChange={(e)=>{props.handleChangeCheckboxTypeof(id,e.target.checked)}}
                                        label={name}
                                        labelPlacement="end"
                                     />
                                )
                            })}   
                        </FormGroup>
                    </div>


                    <div className='filter__each__row'>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{width:"50%"}}>
                            Verefied
                        </div>
                        <Switch {...label} onChange={(e)=>{setVerefied(e.target.checked)}}  />
                    </div>

                    <div className='filter__each'>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{marginBottom:"1rem"}}>
                            Furnished Status
                        </div>
                        <FormGroup aria-label="position" row>
                            {SearchData.furnished_status.map((ele)=>{
                                const{id,name}=ele;
                                return(
                                    <FormControlLabel
                                        key={id}
                                        value={name}
                                        control={<Checkbox />}
                                        onChange={(e)=>{handleFurnishedStatus(id,e.target.checked)}}
                                        label={name}
                                        labelPlacement="end"
                                     />
                                )
                            })}   
                        </FormGroup>
                    </div>

                    <div className='filter__each__row'>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{width:"50%"}}>
                            High Demand
                        </div>
                        <Switch {...label} onChange={(e)=>{setHighDemand(e.target.checked)}}  />
                    </div>

                    <div className='filter__each__row'>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{width:"50%"}}>
                            Recommended
                        </div>
                        <Switch {...label} onChange={(e)=>{setRecommended(e.target.checked)}}  />
                    </div>

                        
                    <div className='filter__each'>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head'>
                            Area (sq.ft.)
                        </div>  
                        <div className='home__inner__seaction2__inner__bottom__under__all__value'>
                            {valueArea[0]}{'\u00A0'}sq.ft {'\u00A0'} - {'\u00A0'} {valueArea[1]}{'\u00A0'}sq.ft
                        </div>
                        <div className='filter__each__slider' style={{width:"60%"}}>
                            <Slider
                                value={valueArea}
                                onChange={handleChangeSliderArea}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                min={1}
                                max={4000}
                            />
                        </div>
                    </div>

                    <div className='filter__each__row'>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{width:"50%"}}>
                            Property's with Photos
                        </div>
                        <Switch {...label} onChange={(e)=>{setPhotos(e.target.checked)}}  />
                    </div>


                    <div className='filter__each'>
                        <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{marginBottom:"1rem"}}>
                            Purchase Status
                        </div>
                        <FormGroup aria-label="position" row>
                            {SearchData.purchase_status.map((ele)=>{
                                const{id,name}=ele;
                                return(
                                    <FormControlLabel
                                        key={id}
                                        value={name}
                                        control={<Checkbox />}
                                        onChange={(e)=>{handleFurnishedStatus(id,e.target.checked)}}
                                        label={name}
                                        labelPlacement="end"
                                     />
                                )
                            })}   
                        </FormGroup>
                    </div>

                </div>
                <div className='search__inner__left__bottom' onClick={()=>{changeFilter()}}>
                    Filter
                </div>
            </div>
            <div className='search__inner__right'>
            {
                loading ? (
                    <div className='loading__outer' style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <LoadingScreen/>    
                    </div>
                    
                ):(
                    displayer.map((ele)=>{
                        const{id,image,title,description,price,area,bhk,type_of,
                        construction_status,furnished_status,verefied,global_type,purchase_status}=ele;

                    var li=[];
                    li.push(type_of);
                    li.push(construction_status);
                    li.push(furnished_status);
                    if(verefied===1)
                    {
                        li.push("Verefied");
                    }
                    else
                    {
                        li.push("un-Verefied");
                    }
                    li.push(global_type);
                    li.push(purchase_status);


                    return(
                        <SearchCard1 id={id} image={image} title={title} description={description} price={price} area={area}
                        bhk={bhk} li={li} valField={props.valField}/>
                    )
                    })
                )
            }   
            </div>
        </div>
    </div>
    </>
);
}

export default Search;