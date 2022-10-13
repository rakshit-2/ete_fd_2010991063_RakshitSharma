import './index.css';
import test from './../../assets/images/back1.jpg';

const ExpertCard1=(props)=>{
return (
    <>
    <div className='expertCard__outer'>
        <div className='expertCard__inner__img'>
            <img src={test} className="expertCard__inner__img__inner"/> 
        </div>
        <div className='expertCard__inner__name'>
            Nitin Verma
        </div>
        <div className='expertCard__inner__desc'>
            Stamp duty in key tier-2 cities in India In this article, 
            listed are stamp duty and registration charges on 
        </div>
        <div className='expertCard__inner__exp'>
            <div className='expertCard__inner__exp__left'>
                <div className='expertCard__inner__exp__left__top'>
                    12 years
                </div>
                <div className='expertCard__inner__exp__left__top' style={{color:"grey"}}>
                    Experience
                </div>
            </div>
            <div style={{width:"1px",height:"2rem",backgroundColor:"grey"}}></div>
            <div className='expertCard__inner__exp__left'>
                <div className='expertCard__inner__exp__left__top'>
                    108
                </div>
                <div className='expertCard__inner__exp__left__top' style={{color:"grey"}}>
                    Properties
                </div>
            </div>
        </div>
    </div>
    </>
);
}

export default ExpertCard1;