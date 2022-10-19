import './index.css';
import test from './../../assets/images/back1.jpg';

const RecommCard1=(props)=>{

    if(props.flag===1)
    {
        return (
            <>
            
            <div className='recomm__card1' style={{width:"320px"}}>
                <div className='recomm__card1__img'>
                    <img src={test} className="recomm__card1__img__inner"/>
                </div>
                <div className='recomm__card1__head'>
                    2 BHK Apartment, 2 Baths
                </div>
                <div className='recomm__card1__desc'>
                    In Ambika Florence Park, Mullanpur
                    Posted by Dealer
                </div>
                <div className='recomm__card1__date'>
                    1 month ago
                </div>
                <div className='recomm__card1__price'>
                   Rs: 12 Lacs only/-
                </div>
            </div>
            </>
        );
    }
    else
    {
        return (
            <>
            
            <div className='recomm__card1'>
                <div className='recomm__card1__img'>
                    <img src={require("./../../assets/images/"+props.image)} className="recomm__card1__img__inner"/>
                </div>
                <div className='recomm__card1__head'>
                    {props.title}
                </div>
                <div className='recomm__card1__desc'>
                    {props.description}
                </div>
                <div className='recomm__card1__date'>
                    {props.bhk} BHK rooms
                </div>
                <div className='recomm__card1__price'>
                   {props.price} only/-
                </div>
            </div>
            </>
        );
    }


}

export default RecommCard1;