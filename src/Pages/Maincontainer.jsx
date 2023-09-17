import React from 'react'
import Footer from './Footer'
import {  Playshifuimg, transformerimg, skillmaticimg, kidimg1, kidimg2, kidimg3, kidimg4, kidimg5, kidimg6, frozen1, hotwheelsimg, nerfgun, spinmasterimg, marveltoyimg, marveltoyimg2, msyteryboximg, monopolyimg, monopolyimg2, pictionary, babyalive, beyblade, barbie1, barbie2, barbie3, barbie4, mobiikiimg,cimg, truckimg, smileimg, moneyimg, shielding} from './img'
import MainImgDisp from '../Components/MainImgDisp'
import ShopByAge from '../Components/ShopByAge'
import DisplayImgContainer from '../Components/DisplayImgContainer'
import Deals from '../Components/Deals'
import MysteryBox from '../Components/MysteryBox'
import PDPContainer from '../Components/PDPContainer'
import DisplayImgContainer2 from '../Components/DisplayImgContainer2'
import NewLaunches from '../Components/NewLaunches'
import Advertisement from '../Components/Advertisement'
import WhyChoseUs from '../Components/WhyChoseUs'




const Maincontainer = () => {
  return (
    <div class="main_container">

<MainImgDisp/>
<ShopByAge/>
<DisplayImgContainer/>
<Deals/>
<MysteryBox/>
<PDPContainer/>
<DisplayImgContainer2/>
<NewLaunches/>
<Advertisement/>
<WhyChoseUs/>
<Footer/>

</div>
  )
}

export default Maincontainer
