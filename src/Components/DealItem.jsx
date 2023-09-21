import React from 'react';

const DealItem = ({ imgSrc, discount, brand, description, mrp, actualPrice }) => {
    return (
        <div className="dealitem">
            <div className="dealitemimg">
                <span>{discount}</span>
                <a href="#"><img src={imgSrc} alt="" /></a>
            </div>
            <div className="dealitemtitle"><a href="#">{brand}</a></div>
            <div className="dealitemdescription">
                <a href="#">
                    <span>
                        {description}
                    </span>
                </a>
            </div>
            <div className="dealitemprice">
                <span className="pricecompare">MRP <del> ₹{mrp}</del></span>
                <span className="priceactual">
                    <p>From</p>
                    <p>₹{actualPrice}</p>
                </span>
            </div>
        </div>
    );
}

export default DealItem;
