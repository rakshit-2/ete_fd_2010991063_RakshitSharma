import './index.css';
import test from './../../assets/images/back1.jpg';

const ExpertCard1=(props)=>{
    if(props.eachPageFlag===1)
    {
        return (
            <>
            <div className='expertCard__outer' style={{backgroundColor:'white',margin:"1.5rem",marginTop:"2rem"}}>
                <div className='expertCard__inner__img'>
                    <img src={require('./../../assets/images/'+props.image)} className="expertCard__inner__img__inner"/> 
                </div>
                <div className='expertCard__inner__name'>
                    {props.name}
                </div>
                <div className='expertCard__inner__desc'>
                    {props.description}
                </div>
                <div className='expertCard__inner__exp'>
                    <div className='expertCard__inner__exp__left'>
                        <div className='expertCard__inner__exp__left__top'>
                            {props.exp_year}
                        </div>
                        <div className='expertCard__inner__exp__left__top' style={{color:"grey"}}>
                            Experience
                        </div>
                    </div>
                    <div style={{width:"1px",height:"2rem",backgroundColor:"grey"}}></div>
                    <div className='expertCard__inner__exp__left'>
                        <div className='expertCard__inner__exp__left__top'>
                            {props.sold_prop}
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
    else
    {
        return (
            <>
            <div className='expertCard__outer'>
                <div className='expertCard__inner__img'>
                    <img src={require('./../../assets/images/'+props.image)} className="expertCard__inner__img__inner"/> 
                </div>
                <div className='expertCard__inner__name'>
                    {props.name}
                </div>
                <div className='expertCard__inner__desc'>
                    {props.description}
                </div>
                <div className='expertCard__inner__exp'>
                    <div className='expertCard__inner__exp__left'>
                        <div className='expertCard__inner__exp__left__top'>
                            {props.exp_year}
                        </div>
                        <div className='expertCard__inner__exp__left__top' style={{color:"grey"}}>
                            Experience
                        </div>
                    </div>
                    <div style={{width:"1px",height:"2rem",backgroundColor:"grey"}}></div>
                    <div className='expertCard__inner__exp__left'>
                        <div className='expertCard__inner__exp__left__top'>
                            {props.sold_prop}
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

}

export default ExpertCard1;