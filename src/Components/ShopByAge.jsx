import React from 'react';
import { kidimg1, kidimg2, kidimg3, kidimg4, kidimg5, kidimg6 } from '../img';
import ShopByAgeListItem from './ShopByAgeListItem';

const Shopbyage = () => {
    return (
        <div className="shopbyage_container">
            <div className="shopbyage__name">
                <h3>SHOP BY AGE</h3>
            </div>

            <div className="shopbyage_div">
                <ShopByAgeListItem imageSrc={kidimg1} ageRange="0-12 MONTHS" />
                <ShopByAgeListItem imageSrc={kidimg2} ageRange="1-3 MONTHS" />
                <ShopByAgeListItem imageSrc={kidimg3} ageRange="4-7 MONTHS" />
                <ShopByAgeListItem imageSrc={kidimg4} ageRange="8-10 MONTHS" />
                <ShopByAgeListItem imageSrc={kidimg5} ageRange="10-14 MONTHS" />
                <ShopByAgeListItem imageSrc={kidimg6} ageRange="14+ MONTHS" />
            </div>
        </div>
    );
}

export default Shopbyage;
