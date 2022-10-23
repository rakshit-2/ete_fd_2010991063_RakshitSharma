import './index.css';
import test from './../../assets/images/back1.jpg';

const FeaturedCard1=(props)=>{
return (
    <>
    <div className='featuredcard__outer'>
        <img src={props.image} className="featuredcard__inner__img"/>
        <div className="card__cover"></div>
        <div className='featuredcard__inner__text'>
            {props.title}
        </div>
        <div className='featuredcard__inner__text__small'>
            {props.desc}
        </div>
    </div>
    </>
);
}

export default FeaturedCard1;