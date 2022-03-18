import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import ItemBlock from './ItemBlock';
import FoodData from '../../database/Food';

const BlockFoodlDiv = styled.div`
    margin-top: 48px;
    margin-bottom: 100px;
    padding-left: 25px;
`
const Title = styled.h3`
    height: 24px;
    font-weight: 600;
    font-size: 18px;
    color: #171725;
    font-family: Semibold;
    text-align: left;
    margin-top: 24px;
    margin-bottom: 24px;
`
function BlockFood(props) {
    const Foods = FoodData;
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false
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
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <BlockFoodlDiv>
            <Title>Food and Beverage</Title>
            <Slider {...settings}>
                {Foods.map((item, key) =>(
                    <div key={key}>
                        <ItemBlock item={item}/>
                    </div>
                ))}
            </Slider>
        </BlockFoodlDiv>
    );
}
export default BlockFood;