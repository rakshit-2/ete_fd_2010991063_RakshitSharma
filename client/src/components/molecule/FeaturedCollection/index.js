import './index.css';
import FeaturedData from '../../assets/store/featuredData';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import FeaturedCard1 from '../../atom/featuredCard1';




const FeaturedCollection=(props)=>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1181 },
          items: 4,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1181, min: 750 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 749, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
return (
    <>
    <div className='featured__outer'>
        <div className='featured__inner'>
            <div className='featured__inner__heading'>
                Featured Collection
            </div>
            <div className='featured__inner__heading__small'>
                For your last minute needs
            </div>
            <div className='featured__inner__display'>
              {FeaturedData.map((ele)=>{
                  const{id,image,title,desc}=ele;
                  return(
                      <FeaturedCard1 id={id} image={image} title={title} desc={desc}/>
                  )
              })}  
            </div>
        </div>
    </div>
    </>
);
}

export default FeaturedCollection;