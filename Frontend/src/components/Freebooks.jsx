import React from 'react';
import list from '../../public/list.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';


function Freebooks() {
const filterData = list.filter((data)=>data.category==="Free");
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ] }
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className='font-semibold text-xl pb-2 '>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum quasi omnis ipsam unde maiores doloremque, odio, debitis eveniet doloribus nostrum ullam eius voluptatum quae velit dolorum beatae eaque fugiat.</p>
    </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>(
          <Card item={item} key={item.id}/>  // card k ander jo item hai item = {usme yeh value daldalo}
        ))}
      </Slider>
        
    </div>
    </div>
    </>

  )
}   

export default Freebooks
