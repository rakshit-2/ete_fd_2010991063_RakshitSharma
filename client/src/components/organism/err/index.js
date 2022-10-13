
import './index.css';
import err_img from './../../assets/images/err.jpg';

const Err=(props)=>{
return (
    <>
    <div className='err__outer'>
        <div className='err__img'>
            <img src={err_img} style={{width:"100%",height:"100%"}}/>
        </div>
    </div>
    </>
);
}

export default Err;