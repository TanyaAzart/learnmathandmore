import React from 'react';
import BlogItems from './BlogItems';
import RecentItems from './RecentItems';
import Item0 from '../blogs/Item0';
import Item1 from '../blogs/Item1';
import Item2 from '../blogs/Item2';
import Item3 from '../blogs/Item3';
import Item4 from '../blogs/Item4';
import Item5 from '../blogs/Item5';
import Item6 from '../blogs/Item6';
import Item7 from '../blogs/Item7';
import Item8 from '../blogs/Item8';
import Item9 from '../blogs/Item9';

const components = [Item0, Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9];

const BlogItem = ({onTitleClick, currentItem})=> {

    const items = BlogItems;
    const item = items.find(item => item.id===currentItem);
    const Component = components[currentItem];

    return (        

        <div className='post'>
            <div className="hero" style={{backgroundImage: `${item.img}`}}></div>
            
                <article className="page">
                    <header className="post-header">
                        <h1>{item.title}</h1>

                        <div className="post-byline">
                            <img src={'/images/Tanya_Eng.jpg'} alt={"Author"}/>        
                            by: Tatiana Azarchenko,
                            <span> {item.date}</span>
                        </div>
                    </header>
                        <RecentItems onTitleClick={onTitleClick}/>
                    </article> 
                        <div className="post-content">
                            <Component />
                        </div>           
        </div>
        )
     }
     
export default BlogItem;