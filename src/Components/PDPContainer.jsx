import React from 'react'
import {  Playshifuimg, transformerimg, skillmaticimg, kidimg1, kidimg2, kidimg3, kidimg4, kidimg5, kidimg6, frozen1, hotwheelsimg, nerfgun, spinmasterimg, marveltoyimg, marveltoyimg2, msyteryboximg, monopolyimg, monopolyimg2, pictionary, babyalive, beyblade, barbie1, barbie2, barbie3, barbie4, mobiikiimg,cimg, truckimg, smileimg, moneyimg, shielding} from '../img'

const PDPContainer = () => {
  return (
    <div class="pdp_container">
        <h3><span>PACKAGING DAMAGED PRODUCTS</span></h3>
        <a href="#">View All</a>
        <div class="pdp_deals">

            <div class="dealitem">
                <div class="dealitemimg">
                    <span>-20%</span>
                    <a href="#"><img src={monopolyimg} alt=""/></a>
                </div>
                <div class="dealitemtitle"><a href="#">UNO</a></div>
                <div class="dealitemdescription">
                    <a href="#">
                        <span>

                            Mattel Games Uno Classic Family & Friends Card Game for Ages 7+


                        </span>
                    </a>
                </div>
                <div class="dealitemprice">
                    <span class="pricecompare">MRP <del> ₹149</del></span>
                    <span class="priceactual">
                        <p>From</p>
                        <p>₹109</p>
                    </span>
                </div>
            </div>
            <div class="dealitem">
                <div class="dealitemimg">
                    <span>-30%</span>
                    <a href="#"><img src={nerfgun} alt=""/></a>
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
                    <span>-20%</span>
                    <a href="#"><img src={monopolyimg2} alt=""/></a>
                </div>
                <div class="dealitemtitle"><a href="#">MONPOLY</a></div>
                <div class="dealitemdescription">
                    <a href="#">
                        <span>

                            Hasbro Gaming Monopoly Classic Board Game for Families and Kids Ages 8 and Up


                        </span>
                    </a>
                </div>
                <div class="dealitemprice">
                    <span class="pricecompare">MRP <del> ₹1,199</del></span>
                    <span class="priceactual">
                        <p>From</p>
                        <p>₹659</p>
                    </span>
                </div>
            </div>
            <div class="dealitem">
                <div class="dealitemimg">
                    <span>-50%</span>
                    <a href="#"><img src={pictionary} alt=""/></a>
                </div>
                <div class="dealitemtitle"><a href="#">MATTEL</a></div>
                <div class="dealitemdescription">
                    <a href="#">
                        <span>

                            Mattel Pictionary - The Game of Quick Draw


                        </span>
                    </a>
                </div>
                <div class="dealitemprice">
                    <span class="pricecompare">MRP <del> ₹1,099</del></span>
                    <span class="priceactual">
                        <p>From</p>
                        <p>₹569</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PDPContainer
