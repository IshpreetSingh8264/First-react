import React from 'react'
import {  Playshifuimg, transformerimg, skillmaticimg, kidimg1, kidimg2, kidimg3, kidimg4, kidimg5, kidimg6, frozen1, hotwheelsimg, nerfgun, spinmasterimg, marveltoyimg, marveltoyimg2, msyteryboximg, monopolyimg, monopolyimg2, pictionary, babyalive, beyblade, barbie1, barbie2, barbie3, barbie4, mobiikiimg,cimg, truckimg, smileimg, moneyimg, shielding} from '../img'

const Deals = () => {
    return (

        <div class="deals">
            <div class="deals_margin_width">
                <div class="navlist">
                    <ul>
                        <li class="listnav"><a href="#">Featured</a></li>
                        <li class="separation">/</li>
                        <li class="listnav"><a href="#">New Launches</a></li>
                        <li class="separation">/</li>
                        <li class="listnav"><a href="#">Bestsellers</a></li>
                    </ul>
                </div>
                <div class="deals_container">

                    <div class="dealitem">
                        <div class="dealitemimg">
                            <span>-30%</span>
                            <a href="#"><img src={nerfgun} alt="" /></a>
                        </div>
                        <div class="dealitemtitle"><a href="#">NERF</a></div>
                        <div class="dealitemdescription">
                            <a href="#">
                                <span>
                                    Nerf Elite Strike SurgeFire Blaster 15-Dart Rotating Drum, Slam Fire, Includes
                                    15 Official Nerf Elite Darts for Children, Teens
                                </span>
                            </a>
                        </div>
                        <div class="dealitemprice">
                            <span class="pricecompare">MRP <del> ₹2,999</del></span>
                            <span class="priceactual">
                                <p>From</p>
                                <p>₹1,499</p>
                            </span>
                        </div>
                    </div>
                    <div class="dealitem">
                        <div class="dealitemimg">
                            <span>-15%</span>
                            <a href="#"><img src={spinmasterimg} alt="" /></a>
                        </div>
                        <div class="dealitemtitle"><a href="#">SPIN MASTER</a></div>
                        <div class="dealitemdescription">
                            <a href="#">
                                <span>
                                    Funskool Spin Master Perplexus Beast, 3D Maze Game With 100 Obstacles For Ages
                                    8+

                                </span>
                            </a>
                        </div>
                        <div class="dealitemprice">
                            <span class="pricecompare">MRP <del> ₹1,499</del></span>
                            <span class="priceactual">
                                <p>From</p>
                                <p>₹1,277</p>
                            </span>
                        </div>
                    </div>
                    <div class="dealitem">
                        <div class="dealitemimg">
                            <span>-15%</span>
                            <a href="#"><img src={marveltoyimg} alt="" /></a>
                        </div>
                        <div class="dealitemtitle"><a href="#">MARVEL</a></div>
                        <div class="dealitemdescription">
                            <a href="#">
                                <span>

                                    Marvel Spider-Man: Across The Spider-Verse Spider-Man 6-Inch-Scale Action Figure
                                    with Web Accessory Toy


                                </span>
                            </a>
                        </div>
                        <div class="dealitemprice">
                            <span class="pricecompare">MRP <del> ₹1,299</del></span>
                            <span class="priceactual">
                                <p>From</p>
                                <p>₹1,099</p>
                            </span>
                        </div>
                    </div>
                    <div class="dealitem">
                        <div class="dealitemimg">
                            <span>-15%</span>
                            <a href="#"><img src={marveltoyimg2} alt="" /></a>
                        </div>
                        <div class="dealitemtitle"><a href="#">Marvel</a></div>
                        <div class="dealitemdescription">
                            <a href="#">
                                <span>

                                    Marvel Spider-Man: Across The Spider-Verse Miles Morales 6-Inch-Scale Action
                                    Figure with Web Accessory Toy


                                </span>
                            </a>
                        </div>
                        <div class="dealitemprice">
                            <span class="pricecompare">MRP <del> ₹1,299</del></span>
                            <span class="priceactual">
                                <p>From</p>
                                <p>₹1,099</p>
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Deals
