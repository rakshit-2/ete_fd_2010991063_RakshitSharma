import './index.css';
import Switch from '@mui/material/Switch';
import * as React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import test from './../../assets/images/err.jpg';
import Axios from 'axios';
import LoadingScreen from './../../atom/loadingScreen/index';
import Autocomplete from '@mui/material/Autocomplete';
import ProfileData from './../../assets/store/profileData';
import TextField from '@mui/material/TextField';

const Profile=(props)=>{
    const[income,setIncome]=useState("");
    const[address,setAddress]=useState("")
    const[contact,setContact]=useState("")
    const[occupation,setOccupation]=useState("")
    const[acc,setAcc]=useState("check")
    const[all,setAll]=useState([])
    const[loading,setLoading]=useState(true);

    const[incomePlace,setIncomePlace]=useState("5000****");
    const[addressPlace,setAddressPlace]=useState("#123, sector-10, Pkl");
    const[contactPlace,setContactPlace]=useState("84275*****");
    const[occupationPlace,setOccupationPlace]=useState("SD2 Delloit");
    const[pincodePlace,setPincodePlace]=useState("124523");
    const[afterSubmit,setAfterSubmit]=useState({
            after:"none",
            before:'flex'
    });



    const[description,setDescription]=useState("");
    const[yearOfExp,setYearOfExp]=useState("");
    const[soldProp,setSoldProp]=useState("");
    const[descriptionPlace,setDescriptionPlace]=useState("about your self and career...");
    const[yearOfExpPlace,setYearOfExpPlace]=useState("10..");
    const[soldPropPlace,setSoldPropPlace]=useState("20..");






    // const[addressPlace,setAddressPlace]=useState("#123, sector-10, Pkl");
    // setDescription

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const[verefied,setVerefied]=React.useState(false);
    const[highDemand,setHighDemand]=React.useState(false);
    const[recommended,setRecommended]=React.useState(false);
    const[typeOfProp,setTypeOfProp]=useState("")
    const[furnished,setFurnished]=useState("")
    const[constructionStatus,setConstructionStatus]=useState("")
    const[purchaseStatus,setPurchaseStatus]=useState("")

    const[title,setTitle]=useState("")
    const[image,setImage]=useState("")
    const[descriptionProp,setDescriptionProp]=useState("")
    const[price,setPrice]=useState("")
    const[area,setArea]=useState("")
    const[bhk,setBhk]=useState("")


    useEffect(() => {
        setLoading(true)
        console.log(props.loginEmail)
        Axios.get('http://localhost:3001/profile/get-data',
        {
            
            params:{
                email:props.loginEmail,
            }
        }).then((res)=>{
            setAll(res.data[0]);
            if(res.data[0].updated===1)
            {
                setAfterSubmit({after:"flex",before:"none"});
            }
            setLoading(false);
        });
      }, []);

    
      
   
    function postProperty()
    {
        var check = image.split('\h')
        var imagess='h'+check[check.length-1];
        Axios.post('http://localhost:3001/property/insert-data',
        {
            title:title,
            image:imagess,
            descriptionProp:descriptionProp,
            price:price.toString()+" Cr",
            area:parseFloat(area),
            bhk:parseInt(bhk.slice(0,1)),
            verefied:verefied,
            highDemand:highDemand,
            recommended:recommended,
            typeOfProp:typeOfProp,
            furnished:furnished,
            constructionStatus:constructionStatus,
            purchaseStatus:purchaseStatus,
            dealer_name:all.fname+" "+all.lname,
            global_type:"buy",

        }).then((res)=>{
            props.changeErrDisplay("Property Posted Successfully")
        });
    }


    function saveProfile()
    {
        if(income==="")
        {
            props.changeErrDisplay("fill Income correctly")
            return;
        }
        var check=/^[#.0-9a-zA-Z\s,-]+$/;
        if(check.test(address)===false)
        {
            props.changeErrDisplay("fill address field")
            return;
        }
        if(contact.length<10)
        {
            props.changeErrDisplay("Add correct Phone Number")

            return;
        }
        if(occupation==="")
        {
            props.changeErrDisplay("fill occupation correctly")
            return;
        }
        
        if(all.dealer===1)
        {
            Axios.post('http://localhost:3001/profile/insert-data',
            {
                
                email:props.loginEmail,
                income:income,
                address:address,
                contact:contact,
                occ:occupation,
                description:description,
                yearOfExp:yearOfExp,
                soldProp:soldProp
    
            }).then((res)=>{
                setLoading(true);
                Axios.get('http://localhost:3001/profile/get-data',
                {
                    params:{
                        email:props.loginEmail,
                    }
                }).then((res)=>{
                    setAll(res.data[0]);
                    if(all.updated===1)
                    {
                        setAfterSubmit({after:"flex",before:"none"});
                    }
                    setAfterSubmit({after:"flex",before:"none"});
                    props.changeErrDisplay("Profile Saved Successfully")
                    setLoading(false);
                });
            });
        }
        else
        {
            Axios.post('http://localhost:3001/profile/insert-data-buyer',
            {
                
                email:props.loginEmail,
                income:income,
                address:address,
                contact:contact,
                occ:occupation,
                // description:description,
                // yearOfExp:yearOfExp,
                // soldProp:soldProp

            }).then((res)=>{
                setLoading(true);
                Axios.get('http://localhost:3001/profile/get-data',
                {
                    params:{
                        email:props.loginEmail,
                    }
                }).then((res)=>{
                    setAll(res.data[0]);
                    if(all.updated===1)
                    {
                        setAfterSubmit({after:"flex",before:"none"});
                    }
                    setAfterSubmit({after:"flex",before:"none"});
                    props.changeErrDisplay("Profile Saved Successfully")
                    setLoading(false);
                });
            });
        }
    }

    
    console.log(image)


    return (
        <>
        <div className='profile__outer'>
        <Navbar errModale={props.errModale} errText={props.errText} changeErrDisplay={props.changeErrDisplay} changeLogin={props.changeLogin} login={props.login} showErrorLogin={props.showErrorLogin}/>
            {
                loading ? (
                    <div className='loading__outer' style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <LoadingScreen/>    
                    </div>
                    
                ):(
                <div className='profile__inner'>
                    <div className="signin-price" style={{width:"fit-content",marginTop:"0.5rem"}}>
                        Our Belovid Member
                    </div>
                    <div className='profile__inner__head'>
                        Profile
                    </div>
                    <div className='profile__inner__img'>
                        <img src={require("./../../assets/images/"+all.image)} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                    </div>
                    <div className='profile__inner__content'>
                        <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem",justifyContent:"space-around"}}>
                            <div className="name-outer">
                                <div className="name-label">
                                    First Name{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <div className='name-field' style={{backgroundColor:"white",borderRadius:"0px",borderBottom:"2px solid #EF4B4D"}}>
                                    {all.fname}
                                </div>
                            </div>
                            <div className="name-outer">
                                <div className="name-label">
                                    Last Name{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <div className='name-field' style={{backgroundColor:"white",borderRadius:"0px",borderBottom:"2px solid #EF4B4D"}}>
                                    {all.lname}
                                </div>
                            </div>
                        </div>


                        <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem"}}>
                            <div className="name-outer">
                                <div className="name-label">
                                    Email{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <div className='name-field' style={{backgroundColor:"white",borderRadius:"1px",borderBottom:"2px solid #EF4B4D"}}>
                                    {props.loginEmail}
                                </div>
                            </div>
                            <div className="name-outer">
                                <div className="name-label">
                                    Income{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <div className='name-field' style={{backgroundColor:"white",borderRadius:"1px",borderBottom:"2px solid #EF4B4D",display:afterSubmit.after}}>
                                    {all.income}
                                </div>
                                <input onChange={(e)=>{setIncome(e.target.value)}}  style={{display:afterSubmit.before}} type="number" placeholder={incomePlace} className="name-field"  required='required'/>
                            </div>
                        </div>

                        <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem"}}>
                            <div className="name-outer">
                                <div className="name-label">
                                    Address{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <div className='name-field' style={{backgroundColor:"white",borderRadius:"1px",borderBottom:"2px solid #EF4B4D",display:afterSubmit.after}}>
                                    {all.address}
                                </div>
                                <input onChange={(e)=>{setAddress(e.target.value)}}  style={{display:afterSubmit.before}} type="text" placeholder={addressPlace} className="name-field" required='required'/>
                            </div>
                            <div className="name-outer">
                                <div className="name-label">
                                    Contact No{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <div className='name-field' style={{backgroundColor:"white",borderRadius:"1px",borderBottom:"2px solid #EF4B4D",display:afterSubmit.after}}>
                                    {all.contact}
                                </div>
                                <input onChange={(e)=>{setContact(e.target.value)}}  style={{display:afterSubmit.before}} type="number" placeholder={contactPlace} className="name-field"  required='required'/>
                            </div>
                        </div>
                        <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginBottom:"4rem",marginTop:"1rem"}}>
                            <div className="name-outer">
                                <div className="name-label">
                                    Occupation{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <div className='name-field' style={{backgroundColor:"white",borderRadius:"1px",borderBottom:"2px solid #EF4B4D",display:afterSubmit.after}}>
                                    {all.occupation}
                                </div>
                                <input onChange={(e)=>{setOccupation(e.target.value)}}  style={{display:afterSubmit.before}} type="text" placeholder={occupationPlace} className="name-field" required='required'/>
                            </div>
                            <div className="name-outer">
                                <div className="name-label">
                                    Type Of Account{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                </div>
                                <div className='name-field' style={{backgroundColor:"white",borderRadius:"1px",borderBottom:"2px solid #EF4B4D"}}>
                                {
                                    
                                all.buyer===1 ? (
                                    
                                    <>
                                        Buyer
                                    </>
                                ):(
                                    <>
                                        Dealer
                                    </>
                                )
                                }
                                </div>
                            </div>
                           
                        </div>
                        {
                                all.dealer===1 ? (
                                    <>
                                    <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem"}}>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Description{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <div className='name-field' style={{backgroundColor:"white",height:'fit-content',borderRadius:"1px",borderBottom:"2px solid #EF4B4D",display:afterSubmit.after}}>
                                                {all.description}
                                            </div>
                                            <input onChange={(e)=>{setDescription(e.target.value)}}  style={{display:afterSubmit.before}} type="text" placeholder={descriptionPlace} className="name-field" required='required'/>
                                        </div>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Years of Exp{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <div className='name-field' style={{backgroundColor:"white",borderRadius:"1px",borderBottom:"2px solid #EF4B4D",display:afterSubmit.after}}>
                                                {all.exp_year}
                                            </div>
                                            <input onChange={(e)=>{setYearOfExp(e.target.value)}}  style={{display:afterSubmit.before}} type="number" placeholder={yearOfExpPlace} className="name-field"  required='required'/>
                                        </div>
                                    </div>
                                    <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem"}}>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Property Sold{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <div className='name-field' style={{backgroundColor:"white",borderRadius:"1px",borderBottom:"2px solid #EF4B4D",display:afterSubmit.after}}>
                                                {all.sold_prop}
                                            </div>
                                            <input onChange={(e)=>{setSoldProp(e.target.value)}}  style={{display:afterSubmit.before}} type="number" placeholder={soldPropPlace} className="name-field" required='required'/>
                                        </div>
                                    </div>
                                    </>
                                ):(
                                    <>
                                    </>
                                )
                            }
                        <div className="signin-button-outer" style={{marginBottom:"4rem",marginTop:"2rem",display:afterSubmit.before}}>
                            <div className="signin-button" onClick={()=>{saveProfile()}}>
                                Save Changes
                            </div>
                        </div>
                        {
                                all.dealer===1 ? (
                                    <>
                                    <div className='signin__name__heading'>
                                        Post Property
                                    </div>
                                    <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem"}}>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Title{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <input onChange={(e)=>{setTitle(e.target.value)}}  type="text" placeholder={"Title"} className="name-field" required='required'/>
                                        </div>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Image{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <input type="file" id="img" name="img" onChange={(e)=>{setImage(e.target.value)}} accept="image/*"></input>
                                            {/* <input onChange={(e)=>{setImage(e.target.value)}}   type="text" placeholder={"home1.jpg"} className="name-field"  required='required'/> */}
                                        </div>
                                    </div>
                                    <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem"}}>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Description{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <textarea onChange={(e)=>{setDescriptionProp(e.target.value)}}  style={{height:"3rem"}} type="text" placeholder={"Description of the property"} className="name-field" required='required'/>
                                        </div>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Price{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <input onChange={(e)=>{setPrice(e.target.value)}}  type="number" placeholder={"In Cr"} className="name-field"  required='required'/>
                                        </div>
                                    </div>
                                    <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem"}}>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Area{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <input onChange={(e)=>{setArea(e.target.value)}}   type="number" placeholder={"Srea in Sq.Ft."} className="name-field" required='required'/>
                                        </div>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                bkh{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <Autocomplete
                                            disablePortal
                                            defaultValue={null}
                                            className="name-field"
                                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px"}}
                                            id="combo-box-demo"
                                            placeholder={"Flat / Apartment / FarmHouse"}
                                            options={ProfileData.check_panel}
                                            value={bhk}
                                            onChange={(event: any, newVal:string | null)=>setBhk(newVal.label)}
                                            renderInput={(params) => <TextField {...params} label="" />}
                                            />
                                        </div>
                                    </div>
                                    <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem"}}>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Type of Property{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <Autocomplete
                                            disablePortal
                                            defaultValue={null}
                                            className="name-field"
                                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px"}}
                                            id="combo-box-demo"
                                            placeholder={"Flat / Apartment / FarmHouse"}
                                            options={ProfileData.check_panel_typeof}
                                            value={typeOfProp}
                                            onChange={(event: any, newVal:string | null)=>setTypeOfProp(newVal.label)}
                                            renderInput={(params) => <TextField {...params} label="" />}
                                            />
                                           
                                        </div>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Construction Status{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <Autocomplete
                                            disablePortal
                                            defaultValue={null}
                                            className="name-field"
                                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px"}}
                                            id="combo-box-demo"
                                            options={ProfileData.check_panel_construction}
                                            value={constructionStatus}
                                            onChange={(event: any, newVal:string | null)=>setConstructionStatus(newVal.label)}
                                            renderInput={(params) => <TextField {...params} label="" />}
                                            />
                                        </div>
                                    </div>
                                    <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem"}}>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Furnished Status{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <Autocomplete
                                            disablePortal
                                            defaultValue={null}
                                            className="name-field"
                                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px"}}
                                            id="combo-box-demo"
                                            options={ProfileData.furnished_status}
                                            value={furnished}
                                            onChange={(event: any, newVal:string | null)=>setFurnished(newVal.label)}
                                            renderInput={(params) => <TextField {...params} label="" />}
                                            />
                                        </div>
                                        <div className="name-outer">
                                            <div className="name-label">
                                                Purchase Status{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <Autocomplete
                                            disablePortal
                                            defaultValue={null}
                                            className="name-field"
                                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px"}}
                                            id="combo-box-demo"
                                            options={ProfileData.purchase_status}
                                            value={purchaseStatus}
                                            onChange={(event: any, newVal:string | null)=>setPurchaseStatus(newVal.label)}
                                            renderInput={(params) => <TextField {...params} label="" />}
                                            />
                                        </div>
                                    </div>
                                    <div className="signin-name" style={{width:"100%",marginLeft:"1rem",marginTop:"1rem",justifyContent:"space-around"}}>
                                        <div className="name-outer" style={{width:"30%"}}>
                                            <div className="name-label">
                                                High Demand{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <Switch {...label} onChange={(e)=>{setHighDemand(e.target.checked)}}  />
                                        </div>
                                        <div className="name-outer" style={{width:"30%"}}>
                                            <div className="name-label">
                                                Recommended{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <Switch {...label} onChange={(e)=>{setRecommended(e.target.checked)}}  />
                                        </div>
                                        <div className="name-outer" style={{width:"30%"}}>
                                            <div className="name-label">
                                                Verefied{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                                            </div>
                                            <Switch {...label} onChange={(e)=>{setVerefied(e.target.checked)}}  />
                                        </div>
                                    </div>
                                    <div className="signin-button-outer" style={{marginBottom:"4rem",marginTop:"2rem"}}>
                                        <div className="signin-button" onClick={()=>{postProperty()}}>
                                            Post
                                        </div>
                                    </div>
                                    </>
                                ):(
                                    <>
                                    </>
                                )
                            }
                    </div>
                </div>
                )
            }
        </div>
        </>
    );
}

export default Profile;