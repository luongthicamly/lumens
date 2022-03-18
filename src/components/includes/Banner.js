import React from 'react';
import './scss/banner.scss';
import ChevronLeft from '../../asset/images/chevron-left.png';
import ChevronRight from '../../asset/images/chevron-right.png';

function Banner(props) {
    return (
        <div className="banner-home">
            <div className="container relative">
                <button className="btn-preve">
                    <img src={ChevronLeft} alt="icon" />
                </button>
                <h1 className="title-banner"> Silver Tier </h1>
                <p>In Silver Tier, every $1 in rental fee paid, you <br /> get 2 coins to redeem exclusive rewards.</p>
                <div className="coupons">
                    <p className="title-coupons">Available Coin balance</p>
                    <h3>340</h3>
                    <div className="relative rectangle"></div>
                    <p>You have paid rental fee for $1,200.<br /> Pay more $800 to achieve Gold Tier.</p>
                    <button className="btn-benefits">View tier benefits <img src={ChevronRight} alt="icon" /></button>
                    <button className="btn-my-coupons">My Coupons</button>
                    <p className='text-center text-update'>Updated: 02/11/2021</p>
                </div>
            </div>
        </div >
    );
}

export default Banner;