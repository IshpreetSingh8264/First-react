import React from 'react';

const MainDispImage = ({ imageUrl }) => {
    return (
        <div className="main_disp_img">
            <a href="#">
                <img src={imageUrl} alt="" />
            </a>
        </div>
    );
}

export default MainDispImage;
