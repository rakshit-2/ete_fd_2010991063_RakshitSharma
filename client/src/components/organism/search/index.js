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
        // window.screenTop(0)
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


    const[resale,setResale]=useState(false);
    const[newSale,setNewSale]=useState(false);

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

    function handleSaleStatus(x,check)
    {
        switch(x) {
            case 0:
                setResale(check);
              break;
            case 1:
                setNewSale(check);
                break;
            default:
              console.log("fuck u")
          }
    }


    const[highDemand,setHighDemand]=React.useState(false);
    const[recommended,setRecommended]=React.useState(false);

    const [valueArea, setValueArea] = React.useState([1, 10000]);
    const handleChangeSliderArea = (event, newValue) => {
        setValueArea(newValue);
    };





    function changeFilter()
    {
        setLoading(true);
        var li1=[];
        for(var i=0;i<all.length;i++)
        {
            var checkPrice=parseFloat(all[i].price.slice(0,4));
            if(checkPrice>=props.valueBudget[0] && checkPrice<=props.valueBudget[1])
            {
                li1.push(all[i])
            }
        }
        

        var li2=[];
        if(props.checkArr[0]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].bhk===1)
                {
                    li2.push(all[j])
                }
            }
        }
        if(props.checkArr[1]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].bhk===2)
                {
                    li2.push(all[j])
                }
            }
        }
        if(props.checkArr[2]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].bhk===3)
                {
                    li2.push(all[j])
                }
            }
        }
        if(props.checkArr[3]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].bhk===4)
                {
                    li2.push(all[j])
                }
            }
        }
        if(props.checkArr[4]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].bhk===5)
                {
                    li2.push(all[j])
                }
            }
        }
        if(li2.length===0)
        {
            li2=all;
        }
        
        var li3=[];
        var flag3=0;
        // add flag for else condition to add all the data if none is checked
        if(props.constructionArr[0]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].construction_status==="Under Construction")
                {
                    li3.push(all[j])
                }
            }
        }
        if(props.constructionArr[1]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].construction_status==="Ready to move")
                {
                    li3.push(all[j])
                }
            }
        }
        if(li3.length===0)
        {
            li3=all;
        }




        var li4=[]
        if(props.typeofArr[0]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].type_of==="Flat")
                {
                    li4.push(all[j])
                }
            }
        }
        if(props.typeofArr[1]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].type_of==="Builder Floor")
                {
                    li4.push(all[j])
                }
            }
        }
        if(props.typeofArr[2]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].type_of==="Independent House")
                {
                    li4.push(all[j])
                }
            }
        }
        if(props.typeofArr[3]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].type_of==="Residential Land")
                {
                    li4.push(all[j])
                }
            }
        }
        if(props.typeofArr[4]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].type_of==="Farm House")
                {
                    li4.push(all[j])
                }
            }
        }
        if(props.typeofArr[5]===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].type_of==="Servised Apartment")
                {
                    li4.push(all[j])
                }
            }
        }
        if(li4.length===0)
        {
            li4=all;
        }



        console.log(li4)



        var li5=[]
        if(verefied===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].verefied===1)
                {
                    li5.push(all[j])
                }
            }
        }
        else
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].verefied===0)
                {
                    li5.push(all[j])
                }
            }
        }


        var li6=[]
        if(furnished===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].furnished_status ==="furnished" )
                {
                    li6.push(all[j])
                }
            }
        }
        if(unfurnished===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].furnished_status ==="unfurnished" )
                {
                    li6.push(all[j])
                }
            }
        }
        if(semiFurnished===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].furnished_status ==="semi-furnished" )
                {
                    li6.push(all[j])
                }
            }
        }
        if(li6.length===0)
        {
            li6=all;
        }




        var li7=[]
        if(highDemand===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].high_demand===1)
                {
                    li7.push(all[j])
                }
            }
        }
        else
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].high_demand===0)
                {
                    li7.push(all[j])
                }
            }
        }


        var li8=[]
        if(recommended===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].recommended===1)
                {
                    li8.push(all[j])
                }
            }
        }
        else
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].recommended===0)
                {
                    li8.push(all[j])
                }
            }
        }

        // console.log(li7,li8)

        var li9=[];
        for(var i=0;i<all.length;i++)
        {
            var checkArea=parseFloat(all[i].area);
            if(checkArea>=valueArea[0] && checkArea<=valueArea[1])
            {
                li9.push(all[i])
            }
        }
        if(li9.length===0)
        {
            li9=all;
        }

        var li10=[]
        if(resale===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].purchase_status==="Resale" )
                {
                    li10.push(all[j])
                }
            }
        }
        if(newSale===true)
        {
            for(var j=0;j<all.length;j++)
            {
                if(all[j].purchase_status==="New Booking" )
                {
                    li10.push(all[j])
                }
            }
        }
        if(li10.length===0)
        {
            li10=all;
        }



        // var check=intersection(li1, li2, li3, li4,li5,li6,li7,li8,li9,li10);
        // console.log(check)
        
        function intersection() {
            var result = [];
            var lists;
        
            if(arguments.length === 1) {
            lists = arguments[0];
            } else {
            lists = arguments;
            }
        
            for(var i = 0; i < lists.length; i++) {
            var currentList = lists[i];
            for(var y = 0; y < currentList.length; y++) {
                var currentValue = currentList[y];
                if(result.indexOf(currentValue) === -1) {
                var existsInAll = true;
                for(var x = 0; x < lists.length; x++) {
                    if(lists[x].indexOf(currentValue) === -1) {
                    existsInAll = false;
                    break;
                    }
                }
                if(existsInAll) {
                    result.push(currentValue);
                }
                }
            }
            }
            return result;
        }
        var check=intersection(li1,li2,li3,li4,li5,li6,li7,li8,li9,li10);
        console.log("price",li1)
        console.log("bhk",li2)
        console.log("construction",li3)
        console.log("property",li4)
        console.log("verefied",li5)
        console.log("furnished",li6)

        console.log("high",li7)
        console.log("recommended",li8)
        console.log("area",li9)
        console.log("purchase",li10)

        console.log(check)
        setDisplayer(check);
        setLoading(false);
    }
return (
    <>
    <div className='search__outer'>
    <Navbar changeLogin={props.changeLogin} login={props.login} showErrorLogin={props.showErrorLogin} flag={1}/>
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
                                max={50}
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
                                max={10000}
                            />
                        </div>
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
                                        onChange={(e)=>{handleSaleStatus(id,e.target.checked)}}
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