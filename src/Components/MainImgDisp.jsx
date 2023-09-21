import React from 'react';
import { Playshifuimg, transformerimg, skillmaticimg } from '../img';
import MainDispImage from './MainDispImage';

const MainImgDisp = () => {
    return (
        <div className="main-img-disp">
            <MainDispImage imageUrl={Playshifuimg} />
            <MainDispImage imageUrl={transformerimg} />
            <MainDispImage imageUrl={skillmaticimg} />
        </div>
    );
}

export default MainImgDisp;
