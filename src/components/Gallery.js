import React, { useState } from 'react';
import GalleryImages from './GalleryImages.js';
import Image from './Image.js';

const Gallery =()=>{

    const images = GalleryImages;
    const [currentImage, setCurrentImage] = useState(images[0]);
        
    const onImageClick = (image)=>{
        setCurrentImage(image)
    };
    
    const renderedImages = images.map(image=>{
        
        const attr = image===currentImage? 'current':'';
        
        return (<div className={attr} key={image.id}>
                    <Image image={image} onImageClick={onImageClick}/>
                </div>
            )
        })

    
    return(
        <div className="gallery">
            <div className="hero-gallery"></div>
                <div className="col-three">
                    <div className="col col-nav gallery-thumbs" id="gallery-thumbs">                    
                        {renderedImages}
                    </div>
                    <div className="col col-content">
                    <div className="gallery-photo" id="gallery-photo">
                        <img src={currentImage.large} alt={currentImage.alt}/>
                    </div>
                </div>
                
                <div className="col col-aside gallery-info" id="gallery-info">
                    <h3 className="title">{currentImage.title}</h3>
                    <p className="description">{currentImage.descr}</p>
                </div>
                </div> 
                
        </div>
        )
}

export default Gallery;