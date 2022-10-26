import './index.css';
import test from './../../assets/images/back1.jpg';

const RecommCard1=(props)=>{

    if(props.flag===1)
    {
        if(props.eachPageFlag===1)
        {
            return (
                <>
                
                <div className='recomm__card1' style={{width:"320px",backgroundColor:"white",border:"2px solid white"}}>
                    <div className='recomm__card1__img'>
                        <img src={require("./../../assets/images/"+props.image)} className="recomm__card1__img__inner"/>
                    </div>
                    <div className='recomm__card1__head'>
                        {props.titl1}
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
        else
        {
            return (
                <>
                
                <div className='recomm__card1' style={{width:"320px"}}>
                    <div className='recomm__card1__img'>
                        <img src={require("./../../assets/images/"+props.image)} className="recomm__card1__img__inner"/>
                    </div>
                    <div className='recomm__card1__head'>
                        {props.titl1}
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
    else if(props.eachPageFlag===1)
    {
        return (
            <>
            
            <div className='recomm__card1' style={{width:"300px",backgroundColor:"white",margin:"2rem",border:"2px solid white"}}>
                <div className='recomm__card1__img'>
                    <img src={require("./../../assets/images/"+props.image)} className="recomm__card1__img__inner"/>
                </div>
                <div className='recomm__card1__head'>
                    {props.titl1}
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