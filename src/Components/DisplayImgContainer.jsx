import React from 'react';
import { frozen1, hotwheelsimg } from '../img';
import DisplayImage from './DisplayImage';

const Displayimgcontainer = () => {
  return (
    <div className="display_imgcontainer1">
      <DisplayImage imageUrl={frozen1} />
      <DisplayImage imageUrl={hotwheelsimg} />
    </div>
  );
}

export default Displayimgcontainer;
