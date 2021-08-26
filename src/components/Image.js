import React from 'react';

const Image = ({image, onImageClick}) => {

    return (
            <div onClick={()=>onImageClick(image)}>
                <img src={image.img} alt={image.alt}
                            data-large-version={image.large}
                            data-title={image.title}
                            data-description={image.descr}/>
            </div>
    )
};

export default Image;