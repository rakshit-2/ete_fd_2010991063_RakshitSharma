import './index.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import test from './../../assets/images/err.jpg';
import Axios from 'axios';
import LoadingScreen from './../../atom/loadingScreen/index';

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
    useEffect(() => {
        setLoading(true)
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

    
      
   
    


    function saveProfile()
    {
        if(income==="")
        {
            alert("fill Income correctly");
            return;
        }
        var check=/^[#.0-9a-zA-Z\s,-]+$/;
        if(check.test(address)===false)
        {
            alert("fill address field");
            return;
        }
        if(contact.length<10)
        {
            alert("Add correct Phone Number");
            return;
        }
        if(occupation==="")
        {
            alert("fill occupation correctly");
            return;
        }
        

        Axios.post('http://localhost:3001/profile/insert-data',
        {
            email:props.loginEmail,
            income:income,
            address:address,
            contact:contact,
            occ:occupation,
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
                setLoading(false);
            });
        });
        






    }




    return (
        <>
        <div className='profile__outer'>
        <Navbar changeLogin={props.changeLogin} login={props.login} showErrorLogin={props.showErrorLogin}/>
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
                    {/* <div className='profile__inner__img'>
                        <img src={test} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                    </div> */}
                    <div className='profile__inner__content'>
                        <div className="signin-name" style={{width:"100%",marginLeft:"3rem",marginTop:"1rem",justifyContent:"space-around"}}>
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


                        <div className="signin-name" style={{width:"100%",marginLeft:"3rem",marginTop:"1rem"}}>
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

                        <div className="signin-name" style={{width:"100%",marginLeft:"3rem",marginTop:"1rem"}}>
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
                        <div className="signin-name" style={{width:"100%",marginLeft:"3rem",marginBottom:"4rem",marginTop:"1rem"}}>
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
                        <div className="signin-button-outer" style={{marginBottom:"4rem",marginTop:"2rem",display:afterSubmit.before}}>
                            <div className="signin-button" onClick={()=>{saveProfile()}}>
                                Save Changes
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
        </>
    );
}

export default Profile;