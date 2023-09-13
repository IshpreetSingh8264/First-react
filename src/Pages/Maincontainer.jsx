import React from 'react'
import Footer from './Footer'

const Maincontainer = () => {
  return (
    <div class="main_container">

    <div class="main-img-disp">
        <div class="main_disp_img">
            <a href="#">
                <img src="./img/Playshifuimg.avif" alt=""/>
            </a>
        </div>
        <div class="main_disp_img">
            <a href="#">
                <img src="./img/transformerimg.webp" alt=""/>
            </a>
        </div>
        <div class="main_disp_img">
            <a href="#">
                <img src="./img/skillmaticimg.webp" alt=""/>
            </a>
        </div>
    </div>

    <div class="shopbyage_container">
        <div class="shopbyage__name">
            <h3>SHOP BY AGE</h3>
        </div>

        <div class="shopbyage_div">
            <div class="shopbyage__list">
                <a href="#"><img src="./img/kidimg1.webp" alt=""/></a>
                <a href="#">
                    <p>0-12 MONTHS</p>
                </a>
            </div>

            <div class="shopbyage__list">
                <a href="#"><img src="./img/kidsimg2.webp" alt=""/></a>
                <a href="#">
                    <p>1-3 MONTHS</p>
                </a>
            </div>

            <div class="shopbyage__list">
                <a href="#"><img src="./img/kidsimg3.webp" alt=""/></a>
                <a href="#">
                    <p>4-7 MONTHS</p>
                </a>
            </div>

            <div class="shopbyage__list">
                <a href="#"><img src="./img/kidimg4.webp" alt=""/></a>
                <a href="#">
                    <p>8-10 MONTHS</p>
                </a>
            </div>
            <div class="shopbyage__list">
                <a href="#"><img src="./img/kidimg5.webp" alt=""/></a>
                <a href="#">
                    <p>10-14 MONTHS</p>
                </a>
            </div>
            <div class="shopbyage__list">
                <a href="#"><img src="./img/kidimg6.webp" alt=""/></a>
                <a href="#">
                    <p>14+ MONTHS</p>
                </a>
            </div>
        </div>

    </div>

    <div class="display_imgcontainer1">
        <div class="displimg"><a href="#"><img src="./img/frozen1.webp" alt=""/></a></div>
        <div class="displimg"><a href="#"><img src="./img/hotwheelsimg.webp" alt=""/></a></div>
    </div>

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
                        <a href="#"><img src="./img/nerfgun.webp" alt=""/></a>
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
                        <a href="#"><img src="./img/spinmasterimg.webp" alt=""/></a>
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
                        <a href="#"><img src="./img/marveltoyimg.webp" alt=""/></a>
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
                        <a href="#"><img src="./img/marveltoyimg2.webp" alt=""/></a>
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

    <div class="mysterybox">
        <div class="mysterybox_left"><a href="#"><img class="mysterybox_left_img" src="./img/msyteryboximg.webp"
                    alt=""/></a></div>
        <div class="mysterybox_right">
            <span>Limited Stocks*</span>
            <h3>PACKAGING DAMAGED PRODUCTS</h3>
            <span class="mysterybox_right_desc">Get EXCITING DEALS on your favourite TOYS, GAMES and
                MORE!</span>
            <a href="#"><span class="mysterybox_right_shopnow">Shop Now</span></a>
        </div>
    </div>

    <div class="pdp_container">
        <h3><span>PACKAGING DAMAGED PRODUCTS</span></h3>
        <a href="#">View All</a>
        <div class="pdp_deals">

            <div class="dealitem">
                <div class="dealitemimg">
                    <span>-20%</span>
                    <a href="#"><img src="./img/monopolyimg.webp" alt=""/></a>
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
                    <a href="#"><img src="./img/nerfgun.webp" alt=""/></a>
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
                    <a href="#"><img src="./img/monopolyimg2.webp" alt=""/></a>
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
                    <a href="#"><img src="./img/pictionary.webp" alt=""/></a>
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

    <div class="display_imgcontainer2">
        <div class="displimg"><a href="#"><img src="./img/babyalive.webp" alt=""/></a></div>
        <div class="displimg"><a href="#"><img src="./img/beyblade.webp" alt=""/></a></div>
    </div>

    <div class="newlaunches">
        <div class="newlanches_container">
            <h3><span>BARBIE NEW LANCHES</span></h3>
            <div class="newlaunches_deals">
                <div class="dealitem">
                    <div class="dealitemimg">
                        <span>New</span>
                        <a href="#"><img src="./img/barbie1.jpg" alt=""/></a>
                    </div>
                    <div class="dealitemtitle"><a href="#">BARBIE</a></div>
                    <div class="dealitemdescription">
                        <a href="#">
                            <span>


                                Barbie Fun & Fancy Brunette Hair Doll with Extra-Long Colorful Hair and Shimmery
                                Pink Dress and 10 Hair and Fashion Play Accessories for Kids Ages 3+



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
                        <span>New</span>
                        <a href="#"><img src="./img/barbie2.webp" alt=""/></a>
                    </div>
                    <div class="dealitemtitle"><a href="#">BARBIE</a></div>
                    <div class="dealitemdescription">
                        <a href="#">
                            <span>


                                Barbie Fun & Fancy Blonde Hair Doll with Extra-Long Colorful Hair and Shimmery
                                Pink Dress and 10 Hair and Fashion Play Accessories for Kids Ages 3+



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
                        <span>New</span>
                        <a href="#"><img src="./img/barbie3.webp" alt=""/></a>
                    </div>
                    <div class="dealitemtitle"><a href="#">BARBIE</a></div>
                    <div class="dealitemdescription">
                        <a href="#">
                            <span>


                                Barbie Fashionistas Doll with Brunette Curly Hair And Graffiti Dress #201 for
                                Kids Ages 3+ (HPF77)



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
                        <span>New</span>
                        <a href="#"><img src="./img/barbie4.webp" alt=""/></a>
                    </div>
                    <div class="dealitemtitle"><a href="#">BARBIE</a></div>
                    <div class="dealitemdescription">
                        <a href="#">
                            <span>


                                Barbie Fashionistas Doll with Blond Ponytail And Floral Dress #205 for Kids Ages
                                3+ (HJT02)



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
            </div>
        </div>
    </div>

    <div class="advertisement"><a href="#">
            <img src="./img/mobiikiimg.webp" alt=""/></a>
    </div>

    <div class="whychoseus">
        <h3 class="title1"><span>WHY CHOSE FUNCORP?</span></h3>
        <hr class="title1hr"/>
        <div class="reasonscontainer">
            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src="./img/cimg.png" alt=""/></span>
                    <span class="reasondesc">Original Products</span>
                </a>
            </div>
            <div class="reasonseparation"></div>

            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src="./img/truckimg.png" alt=""/></span>
                    <span class="reasondesc">Shipping Across India</span>
                </a>
            </div>
            <div class="reasonseparation"></div>

            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src="./img/smileimg.png" alt=""/></span>
                    <span class="reasondesc">A+ Customer Service</span>
                </a>
            </div>
            <div class="reasonseparation"></div>

            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src="./img/moneyimg.png" alt=""/></span>
                    <span class="reasondesc">COD Available</span>
                </a>
            </div>
            <div class="reasonseparation"></div>

            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src="./img/shieldimg.png" alt=""/></span>
                    <span class="reasondesc">Secured Payments</span>
                </a>
            </div>
        </div>
    </div>

<Footer/>

</div>
  )
}

export default Maincontainer
