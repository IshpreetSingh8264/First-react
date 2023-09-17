import React from 'react'
import {  Playshifuimg, transformerimg, skillmaticimg, kidimg1, kidimg2, kidimg3, kidimg4, kidimg5, kidimg6, frozen1, hotwheelsimg, nerfgun, spinmasterimg, marveltoyimg, marveltoyimg2, msyteryboximg, monopolyimg, monopolyimg2, pictionary, babyalive, beyblade, barbie1, barbie2, barbie3, barbie4, mobiikiimg,cimg, truckimg, smileimg, moneyimg, shielding} from '../img'

const WhyChoseUs = () => {
  return (
    <div class="whychoseus">
        <h3 class="title1"><span>WHY CHOSE FUNCORP?</span></h3>
        <hr class="title1hr"/>
        <div class="reasonscontainer">
            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src={cimg} alt=""/></span>
                    <span class="reasondesc">Original Products</span>
                </a>
            </div>
            <div class="reasonseparation"></div>

            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src={truckimg} alt=""/></span>
                    <span class="reasondesc">Shipping Across India</span>
                </a>
            </div>
            <div class="reasonseparation"></div>

            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src={smileimg} alt=""/></span>
                    <span class="reasondesc">A+ Customer Service</span>
                </a>
            </div>
            <div class="reasonseparation"></div>

            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src={moneyimg} alt=""/></span>
                    <span class="reasondesc">COD Available</span>
                </a>
            </div>
            <div class="reasonseparation"></div>

            <div class="reasonitem">
                <a href="#">
                    <span class="reasonitemimg"><img src={shielding} alt=""/></span>
                    <span class="reasondesc">Secured Payments</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default WhyChoseUs
