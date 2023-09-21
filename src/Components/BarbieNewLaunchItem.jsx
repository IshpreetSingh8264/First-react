import React from 'react';

const BarbieNewLaunchItem = ({ imgSrc, title, description, mrp, actualPrice }) => {
    return (
        <div className="dealitem">
            <div className="dealitemimg">
                <span>New</span>
                <a href="#"><img src={imgSrc} alt="" /></a>
            </div>
            <div className="dealitemtitle"><a href="#">BARBIE</a></div>
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

export default BarbieNewLaunchItem;
