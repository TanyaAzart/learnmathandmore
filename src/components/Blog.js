import React from 'react';
import BlogItems from './BlogItems';
import RecentItems from './RecentItems';
import Link from './Link';
import Tanya from './images/Tanya_Eng.jpg';


const Blog =({onTitleClick})=> {

    const items = BlogItems.reverse();
        
    const renderedItems = items.map(item=>{
        return (
            <React.Fragment key={item.id}>
                <header className="post-header">
                    <h2 onClick={()=>onTitleClick(item.id)}>
                        <Link href={`/blog/${item.id}`}>
                        {item.title}
                        </Link></h2>

                        <div className="post-byline">
                            <img src={Tanya} alt={"Author"}/>
                                by: Tatiana Azarchenko, <span> {item.date}</span>
                        </div>
                </header>

                <Link href={`/blog/${item.id}`}>
                    <div onClick={()=>onTitleClick(item.id)}  className="posts-image" id={`${item.img}`} >
                       </div>
                </Link>
                <p>{item.content}</p>
            </React.Fragment>
            )    
            });

    return (
        <div className="blog-index">        
            <div className='hero'></div>
            <h1>Записки путешественницы</h1>
                <div className="col-two">
                    <div className='col-aside blog-recent'>
                        <RecentItems onTitleClick={onTitleClick}/>
                    </div>
                <div className="col-content">
                    <div className='blog-posts'>
                        {renderedItems} 
                    </div>                         
                </div>   
            </div>              
        </div>) 
}

export default Blog;