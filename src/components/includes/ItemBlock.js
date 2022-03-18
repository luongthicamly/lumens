import React from 'react';
import './scss/itemBlock.scss';
import IconDisable from '../../asset/images/icon-disable.png';

function ItemBlock(props) {
    const {item} = props;
    return (
        <div className='item-block'>
            <div className='image-item'>
                <img src={item.image} alt=''/>
            </div>
            <div className='content-item'>
                <p className={`title-item ${item.notification !== "" && item.notification !== undefined ? 'disable-text' : ''}`}>
                    {item.notification !== "" && item.notification !== undefined ? <img src={IconDisable} alt=""/> : ''}
                    {item.title}
                </p>
                {item.detail}
                <div className='notification'>{item.notification}</div>
            </div>
        </div>
    );
}

export default ItemBlock;