import React from 'react'
import {  Playshifuimg, transformerimg, skillmaticimg, kidimg1, kidimg2, kidimg3, kidimg4, kidimg5, kidimg6, frozen1, hotwheelsimg, nerfgun, spinmasterimg, marveltoyimg, marveltoyimg2, msyteryboximg, monopolyimg, monopolyimg2, pictionary, babyalive, beyblade, barbie1, barbie2, barbie3, barbie4, mobiikiimg,cimg, truckimg, smileimg, moneyimg, shielding} from '../img'
const MainImgDisp = () => {
  return (
    <div class="main-img-disp">
        <div class="main_disp_img">
            <a href="#">
                <img src={Playshifuimg} alt=""/>
            </a>
        </div>
        <div class="main_disp_img">
            <a href="#">
                <img src={transformerimg} alt=""/>
            </a>
        </div>
        <div class="main_disp_img">
            <a href="#">
                <img src={skillmaticimg} alt=""/>
            </a>
        </div>
    </div>
  )
}

export default MainImgDisp
