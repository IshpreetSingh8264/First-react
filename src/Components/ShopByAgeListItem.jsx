import React from 'react';

const ShopByAgeListItem = ({ imageSrc, ageRange }) => {
    return (
        <div className="shopbyage__list">
            <a href="#"><img src={imageSrc} alt="" /></a>
            <a href="#">
                <p>{ageRange}</p>
            </a>
        </div>
    );
}

export default ShopByAgeListItem;
