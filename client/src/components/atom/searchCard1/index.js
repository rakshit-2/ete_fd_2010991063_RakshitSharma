import './index.css';
import test from './../../assets/images/back1.jpg';
import whatsapp from './../../assets/images/whatsapp_logo.svg';
import twitter from './../../assets/images/twitter_logo.svg';
import { requirePropFactory } from '@mui/material';
import { display } from '@mui/system';
import image from './../../assets/images/home1.jpg';


const SearchCard1=(props)=>{
    function display_filter()
    {
        var lis=[];
        for(var i=0;i<props.li.length;i++)
        {
            lis.push(
            <div className='search__inner__right__each__content__filter__each'>
                {props.li[i]}
            </div>
            )
        }
        return lis;
    }
    return (
        <>
        <div className='search__inner__right__each'>
            <div className='search__inner__right__each__img'>
                <img src={require("./../../assets/images/"+props.image)} style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
            </div>
            <div className='search__inner__right__each__content'>
                <div className='search__inner__right__each__content__heading'>
                    {props.title}
                </div>
                <div className='search__inner__right__each__content__heading' style={{color:"grey",fontSize:"14px",fontWeight:"500"}}>
                    {props.valField}
                </div>
                <div className='search__inner__right__each__content__inner'>
                    <div className='search__inner__right__each__content__price'>
                        {props.price}
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        {props.area} <span className='search__inner__right__each__content__price__small'>Sq.Ft.</span>
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        {props.bhk} <span className='search__inner__right__each__content__price__small'>BHK</span>
                    </div>
                </div>
                <div className='search__inner__right__each__content__filter'>
                    {display_filter()}
                </div>
                <div className='search__inner__right__each__content__desc'>
                    {props.description}
                </div>
                <div className='search__inner__right__each__content__contact'>
                    <img src={whatsapp} className="search__inner__right__each__content__contact__img"/>
                    <img src={twitter} className="search__inner__right__each__content__contact__img"/>
                    <div className='search__inner__right__each__content__contact__button'>
                        Contact Dealer
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SearchCard1;