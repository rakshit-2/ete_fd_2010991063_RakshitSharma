import './index.css';
import test from './../../assets/images/back1.jpg';

const NewsCard1=(props)=>{
return (
    <>
    <div className='newsCard__outer'>
        <div className='newsCard__inner__img'>
            <img src={test} className="newsCard__inner__img__inner"/>
        </div>
        <div className='newsCard__inner__info'>
            <div className='newsCard__inner__info__name'>
                Sunita Mishra
            </div>
            <div className='newsCard__inner__info__name'>
                Jul 2021
            </div>
        </div>
        <div className='newsCard__inner__heading'>
            Stamp duty in key tier-2 cities in India
        </div>
        <div className='newsCard__inner__text'>    
            Stamp duty in key tier-2 cities in India
            In this article, listed are stamp duty and registration charges on property purchases in India’s 20 major tier-2 cities
        </div>
    </div>
    </>
);
}

export default NewsCard1;