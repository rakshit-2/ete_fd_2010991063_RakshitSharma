import './index.css';
import NewsData from '../../assets/store/newsData';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import NewsCard1 from '../../atom/newsCard1';





const News=(props)=>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1181 },
          items: 3,
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
    <p id="newsSection"></p>
    <br></br>
    <br></br>
    <div className='news__outer' >
        <div className='news__inner'>
            <div className='news__inner__heading'>
                News & Articles
            </div>
            <div className='news__inner__heading__small'>
                Read what's happening in Real Estate
            </div>
            <div className='news__inner__display'>
                <Carousel 
                    responsive={responsive} 
                    draggable
                    pauseOnHover
                    infinite
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                    {NewsData.map((ele)=>{
                        const{id,name,desc,image,title,date}=ele;
                        return(
                            <NewsCard1 id={id} name={name} desc={desc} image={image} title={title} date={date}/>
                        )
                    })}  
                </Carousel>
                
            </div>
        </div>
    </div>
    </>
);
}

export default News;