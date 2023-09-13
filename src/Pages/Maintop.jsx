import React from 'react';
import barbieLogo from './img/barbielogo.avif';
import nerfLogo from './img/nerflogo.avif';
import legoLogo from './img/legologo.webp';
import disneyLogo from './img/disneylogo.avif';
import funskoolLogo from './img/funskoollogo.avif';
import transformerImage from './img/transformer.webp';
import starWarsImage from './img/starwars.webp';
import hotwheelsLogo from './img/hotwheelslogo.avif';

const Maintop = () => {
  return (
    <div className="main_top">
      <div className="main_top_content">
        <a href="#">
          <img src={barbieLogo} alt="" />
        </a>
      </div>
      <div className="main_top_content">
        <a href="#">
          <img src={nerfLogo} alt="" />
        </a>
      </div>
      <div className="main_top_content">
        <a href="#">
          <img src={legoLogo} alt="" />
        </a>
      </div>
      <div className="main_top_content">
        <a href="#">
          <img src={disneyLogo} alt="" />
        </a>
      </div>
      <div className="main_top_content">
        <a href="#">
          <img src={funskoolLogo} alt="" />
        </a>
      </div>
      <div className="main_top_content">
        <a href="#">
          <img src={transformerImage} alt="" />
        </a>
      </div>
      <div className="main_top_content">
        <a href="#">
          <img src={starWarsImage} alt="" />
        </a>
      </div>
      <div className="main_top_content">
        <a href="#">
          <img src={hotwheelsLogo} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Maintop;