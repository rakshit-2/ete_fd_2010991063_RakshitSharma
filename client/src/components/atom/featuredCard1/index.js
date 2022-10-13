import './index.css';
import test from './../../assets/images/back1.jpg';

const FeaturedCard1=(props)=>{
return (
    <>
    <div className='featuredcard__outer'>
        <img src={test} className="featuredcard__inner__img"/>
        <div className="card__cover"></div>
        <div className='featuredcard__inner__text'>
            Resedential plots
        </div>
        <div className='featuredcard__inner__text__small'>
            Resedential plots
        </div>
    </div>
    </>
);
}

export default FeaturedCard1;