import React from 'react';
import { monopolyimg, nerfgun, monopolyimg2, pictionary } from '../img';
import PackagedDealItem from './PackagedDealItem'; 

const PDPContainer = () => {
    return (
        <div className="pdp_container">
            <h3><span>PACKAGING DAMAGED PRODUCTS</span></h3>
            <a href="#">View All</a>
            <div className="pdp_deals">
                <PackagedDealItem
                    imgSrc={monopolyimg}
                    discount="-20%"
                    brand="UNO"
                    description="Mattel Games Uno Classic Family & Friends Card Game for Ages 7+"
                    mrp="149"
                    actualPrice="109"
                />
                <PackagedDealItem
                    imgSrc={nerfgun}
                    discount="-30%"
                    brand="NERF"
                    description="Nerf Elite Strike SurgeFire Blaster 15-Dart Rotating Drum, Slam Fire, Includes 15 Official Nerf Elite Darts for Children, Teens"
                    mrp="2,999"
                    actualPrice="1,499"
                />
                <PackagedDealItem
                    imgSrc={monopolyimg2}
                    discount="-20%"
                    brand="MONOPOLY"
                    description="Hasbro Gaming Monopoly Classic Board Game for Families and Kids Ages 8 and Up"
                    mrp="1,199"
                    actualPrice="659"
                />
                <PackagedDealItem
                    imgSrc={pictionary}
                    discount="-50%"
                    brand="MATTEL"
                    description="Mattel Pictionary - The Game of Quick Draw"
                    mrp="1,099"
                    actualPrice="569"
                />
            </div>
        </div>
    );
}

export default PDPContainer;
