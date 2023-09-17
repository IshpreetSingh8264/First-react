import React from 'react'
import {  Playshifuimg, transformerimg, skillmaticimg, kidimg1, kidimg2, kidimg3, kidimg4, kidimg5, kidimg6, frozen1, hotwheelsimg, nerfgun, spinmasterimg, marveltoyimg, marveltoyimg2, msyteryboximg, monopolyimg, monopolyimg2, pictionary, babyalive, beyblade, barbie1, barbie2, barbie3, barbie4, mobiikiimg,cimg, truckimg, smileimg, moneyimg, shielding} from '../img'

const MysteryBox = () => {
  return (
    <div class="mysterybox">
        <div class="mysterybox_left"><a href="#"><img class="mysterybox_left_img" src={msyteryboximg}
                    alt=""/></a></div>
        <div class="mysterybox_right">
            <span>Limited Stocks*</span>
            <h3>PACKAGING DAMAGED PRODUCTS</h3>
            <span class="mysterybox_right_desc">Get EXCITING DEALS on your favourite TOYS, GAMES and
                MORE!</span>
            <a href="#"><span class="mysterybox_right_shopnow">Shop Now</span></a>
        </div>
    </div>
  )
}

export default MysteryBox
