import React from 'react';
import BlogItems from './BlogItems';
import Link from './Link';


const RecentItems =({onTitleClick})=>{

    const items = BlogItems.reverse();
    const lastItems= items.filter((item, index)=> index < 5);
    
    const renderedLastItems = lastItems.map(item=>{
        return (<React.Fragment key={item.id}>
                <li onClick={()=>onTitleClick(item.id)}>
                    <Link href={`/blog/${item.id}`}>{item.title}</Link>
                    <span>Posted: {item.date}</span>
                </li>
                </React.Fragment>
                )    
            });

    return (
            <div className='post-aside'>                
                <h4>Последние записи</h4>
                <ul className="blog-title-list">{renderedLastItems}</ul>
            </div>
    );        
};

export default RecentItems;