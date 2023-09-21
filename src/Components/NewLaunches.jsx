import React from 'react';
import { barbie1, barbie2, barbie3, barbie4 } from '../img';
import BarbieNewLaunchItem from './BarbieNewLaunchItem';

const NewLaunches = () => {
    return (
        <div className="newlaunches">
            <div className="newlanches_container">
                <h3><span>BARBIE NEW LAUNCHES</span></h3>
                <div className="newlaunches_deals">
                    <BarbieNewLaunchItem
                        imgSrc={barbie1}
                        title="Barbie Fun & Fancy Brunette Hair Doll"
                        description="with Extra-Long Colorful Hair and Shimmery Pink Dress and 10 Hair and Fashion Play Accessories for Kids Ages 3+"
                        mrp="149"
                        actualPrice="109"
                    />
                    <BarbieNewLaunchItem
                        imgSrc={barbie2}
                        title="Barbie Fun & Fancy Blonde Hair Doll"
                        description="with Extra-Long Colorful Hair and Shimmery Pink Dress and 10 Hair and Fashion Play Accessories for Kids Ages 3+"
                        mrp="149"
                        actualPrice="109"
                    />
                    <BarbieNewLaunchItem
                        imgSrc={barbie3}
                        title="Barbie Fashionistas Doll with Brunette Curly Hair"
                        description="And Graffiti Dress #201 for Kids Ages 3+ (HPF77)"
                        mrp="149"
                        actualPrice="109"
                    />
                    <BarbieNewLaunchItem
                        imgSrc={barbie4}
                        title="Barbie Fashionistas Doll with Blond Ponytail"
                        description="And Floral Dress #205 for Kids Ages 3+ (HJT02)"
                        mrp="149"
                        actualPrice="109"
                    />
                </div>
            </div>
        </div>
    );
}

export default NewLaunches;
