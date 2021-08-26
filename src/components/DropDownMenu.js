import React from 'react';
import BlogItems from './BlogItems';
import Link from './Link';

const items = BlogItems.reverse();
const lastItems= items.filter((item, index)=> index <5)

const DropDownMenu = ({onTitleClick})=>{     
         
    const renderedItems = lastItems.map(item => {
        return <React.Fragment key={item.id}>
            <li onClick={()=>onTitleClick(item.id)}>
                <Link 
                href={`/blog/${item.id}`}
                >
                    {item.title}
                </Link>
            </li>                      
                </React.Fragment>        
    })

    return <div className='dropdown'> 
        <ul className="drop-menu">
                <li >Последние записи</li>
                
                {renderedItems}                       
        </ul> 
           

    </div>
}

export default DropDownMenu;