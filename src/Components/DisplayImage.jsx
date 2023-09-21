import React from 'react';

const DisplayImage = ({ imageUrl }) => {
    return (
        <div className="displimg">
            <a href="#">
                <img src={imageUrl} alt="" />
            </a>
        </div>
    );
}

export default DisplayImage;
