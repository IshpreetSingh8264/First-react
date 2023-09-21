import React from 'react';
import { babyalive, beyblade } from '../img';
import DisplayImage2 from './DisplayImage2'; 

const DisplayImgContainer2 = () => {
  return (
    <div className="display_imgcontainer2">
      <DisplayImage2 imageUrl={babyalive} />
      <DisplayImage2 imageUrl={beyblade} />
    </div>
  );
}

export default DisplayImgContainer2;
