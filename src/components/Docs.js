import React, { useState } from 'react';
import Mendeleev from './images/mendeleev.jpg';
import UIV from './images/master.png';
import MGU from './images/mgu.jpg';
import MGUU from './images/mguu.jpg';
import Celta from './images/celta.jpg';
import ASU from './images/asu_cert.jpg';




const Docs = () => {

    const docs = [Mendeleev, UIV, MGU, MGUU, Celta, ASU]
    const [currentDoc, setCurrentDoc] = useState(null);

    const onDocClick = (doc)=>{
        if (currentDoc==null) {
            setCurrentDoc(doc)
        }
        else {
            setCurrentDoc(null)
        }
    }

    const renderedDocs = docs.map((doc, index) =>{  
        
        const attr = doc===currentDoc? 'enlarged':'';  
        
           
        return (
                <div className='pics'
                    id={attr} 
                    key={index}
                    onClick={()=>onDocClick(doc)}>
                        <img src={docs[index]} alt={''}/>
                    </div>
                )
        })

    return (<div className='docs'>
        {renderedDocs}
            </div>)
};

export default Docs;
