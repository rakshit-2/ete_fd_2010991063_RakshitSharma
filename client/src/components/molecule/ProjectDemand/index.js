import './index.css';
import RecommCard1 from './../../atom/recommCard1';
import HomeData from '../../assets/store/homeData';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";





const ProjectDemand=(props)=>{
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
    <div className='recomm__outer'>
        <div className='recomm__inner'>
            <div className='recomm__inner__heading'>
                Recommended Projects
            </div>
            <div className='recomm__inner__heading__small'>
                The most searched projects
            </div>
            <div className='recomm__inner__display'>
                <Carousel 
                    responsive={responsive} 
                    draggable
                    autoPlay
                    autoPlaySpeed={3000}
                    pauseOnHover
                    infinite
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                    {HomeData.check_panel_typeof.map((ele)=>{
                        const{id,name}=ele;
                        return(
                            <RecommCard1 flag={1}/>
                        )
                    })}  
                </Carousel>
                
            </div>
        </div>
    </div>
    </>
);
}

export default ProjectDemand;