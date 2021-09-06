import React, { useState } from 'react';
import Mendeleev from './images/mendeleev.jpg';
import MGU from './images/mgu.jpg';
import MGUU from './images/mguu.jpg';
import Celta from './images/celta.jpg';
import ASU from './images/asu_cert.jpg';
import CMA from './images/cma.jpg';


const Docs = () => {

    const docs = [Mendeleev, MGU, MGUU, ASU, Celta, CMA]
    const [currentDoc, setCurrentDoc] = useState(null);

    const renderedDocs = docs.map((doc, index) =>{  
        
        const attr = doc===currentDoc? 'enlarged':'';   
        
        return (
                <div className='pics'
                    id={attr} 
                    key={index}
                    onMouseEnter={()=>setCurrentDoc(doc)}
                    onMouseLeave={()=>setCurrentDoc(null)}>
                        <img src={docs[index]} alt={''}/>
                    </div>
                )
        })

    return (<div className='docs'>
        {renderedDocs}
            </div>)
};

export default Docs;
