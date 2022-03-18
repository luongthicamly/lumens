import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import ItemBlock from './ItemBlock';
import RentalData from '../../database/Rental';

const BlockRentallDiv = styled.div`
    margin-top: 48px;
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
function BlockRental(props) {
    const Rentals = RentalData;
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
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <BlockRentallDiv>
            <Title>Rental Rebate</Title>
            <Slider {...settings}>
                {Rentals.map((item, key) =>(
                    <div key={key}>
                        <ItemBlock item={item}/>
                    </div>
                ))}
            </Slider>
        </BlockRentallDiv>
    );
}
export default BlockRental;