import React from 'react';

const Image = ({image, onImageClick}) => {

    return (
            <div onClick={()=>onImageClick(image)}>
                <img src={`${process.env.PUBLIC_URL}${image.img}`} alt={image.alt}/>
            </div>
    )
};

export default Image;

// data-large-version={`${process.env.PUBLIC_URL}${image.large}`}
//                             data-title={image.title}
//                             data-description={image.descr}