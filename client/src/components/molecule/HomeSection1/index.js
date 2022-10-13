import './index.css';
import back1 from './../../assets/images/back1.jpg'
import back11 from './../../assets/images/back11.png'
import back2 from './../../assets/images/back2.jpg'
import back3 from './../../assets/images/back3.jpg'
import back4 from './../../assets/images/back4.jpg'

const HomeSection1=(props)=>{
return (
    <>
        <div id="carouselExampleSlidesOnly"style={{width:"100%",height:"35rem",zIndex:"0"}}  class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" style={{width:"100%",height:"35rem",zIndex:"0"}} src={back1} alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" style={{width:"100%",height:"35rem",zIndex:"0"}} src={back2} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" style={{width:"100%",height:"35rem",zIndex:"0"}} src={back3} alt="Third slide"/>
                </div>
            </div>
        </div>
    </>
);
}

export default HomeSection1;