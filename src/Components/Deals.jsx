import React from 'react';
import { nerfgun, spinmasterimg, marveltoyimg, marveltoyimg2 } from '../img';
import DealItem from './DealItem'; 

const Deals = () => {
    return (
        <div className="deals">
            <div className="deals_margin_width">
                <div className="navlist">
                    <ul>
                        {/* Navigation list */}
                    </ul>
                </div>
                <div className="deals_container">
                    <DealItem
                        imgSrc={nerfgun}
                        discount="-30%"
                        brand="NERF"
                        description="Nerf Elite Strike SurgeFire Blaster 15-Dart Rotating Drum, Slam Fire, Includes 15 Official Nerf Elite Darts for Children, Teens"
                        mrp="2,999"
                        actualPrice="1,499"
                    />
                    <DealItem
                        imgSrc={spinmasterimg}
                        discount="-15%"
                        brand="SPIN MASTER"
                        description="Funskool Spin Master Perplexus Beast, 3D Maze Game With 100 Obstacles For Ages 8+"
                        mrp="1,499"
                        actualPrice="1,277"
                    />
                    <DealItem
                        imgSrc={marveltoyimg}
                        discount="-15%"
                        brand="MARVEL"
                        description="Marvel Spider-Man: Across The Spider-Verse Spider-Man 6-Inch-Scale Action Figure with Web Accessory Toy"
                        mrp="1,299"
                        actualPrice="1,099"
                    />
                    <DealItem
                        imgSrc={marveltoyimg2}
                        discount="-15%"
                        brand="Marvel"
                        description="Marvel Spider-Man: Across The Spider-Verse Miles Morales 6-Inch-Scale Action Figure with Web Accessory Toy"
                        mrp="1,299"
                        actualPrice="1,099"
                    />
                </div>
            </div>
        </div>
    );
}

export default Deals;
