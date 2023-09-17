import React from 'react'
import { Playshifuimg, transformerimg, skillmaticimg, kidimg1, kidimg2, kidimg3, kidimg4, kidimg5, kidimg6, frozen1, hotwheelsimg, nerfgun, spinmasterimg, marveltoyimg, marveltoyimg2, msyteryboximg, monopolyimg, monopolyimg2, pictionary, babyalive, beyblade, barbie1, barbie2, barbie3, barbie4, mobiikiimg, cimg, truckimg, smileimg, moneyimg, shielding } from '../img'

const Shopbyage = () => {
    return (
        <div class="shopbyage_container">
            <div class="shopbyage__name">
                <h3>SHOP BY AGE</h3>
            </div>

            <div class="shopbyage_div">
                <div class="shopbyage__list">
                    <a href="#"><img src={kidimg1} alt="" /></a>
                    <a href="#">
                        <p>0-12 MONTHS</p>
                    </a>
                </div>

                <div class="shopbyage__list">
                    <a href="#"><img src={kidimg2} alt="" /></a>
                    <a href="#">
                        <p>1-3 MONTHS</p>
                    </a>
                </div>

                <div class="shopbyage__list">
                    <a href="#"><img src={kidimg3} alt="" /></a>
                    <a href="#">
                        <p>4-7 MONTHS</p>
                    </a>
                </div>

                <div class="shopbyage__list">
                    <a href="#"><img src={kidimg4} alt="" /></a>
                    <a href="#">
                        <p>8-10 MONTHS</p>
                    </a>
                </div>
                <div class="shopbyage__list">
                    <a href="#"><img src={kidimg5} alt="" /></a>
                    <a href="#">
                        <p>10-14 MONTHS</p>
                    </a>
                </div>
                <div class="shopbyage__list">
                    <a href="#"><img src={kidimg6} alt="" /></a>
                    <a href="#">
                        <p>14+ MONTHS</p>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Shopbyage
