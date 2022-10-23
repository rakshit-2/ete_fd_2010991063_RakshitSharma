import './index.css';
import test from './../../assets/images/back1.jpg';

const NewsCard1=(props)=>{
return (
    <>
    <div className='newsCard__outer'>
        <div className='newsCard__inner__img'>
            <img src={props.image} className="newsCard__inner__img__inner"/>
        </div>
        <div className='newsCard__inner__info'>
            <div className='newsCard__inner__info__name'>
                {props.name}
            </div>
            <div className='newsCard__inner__info__name'>
                {props.date}
            </div>
        </div>
        <div className='newsCard__inner__heading'>
            {props.title}
        </div>
        <div className='newsCard__inner__text'>    
            {props.desc}
        </div>
    </div>
    </>
);
}

export default NewsCard1;