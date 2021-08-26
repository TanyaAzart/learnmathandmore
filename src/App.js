import React, { useState } from 'react';
import Route from './components/Route';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Blog from './components/Blog';
import BlogItem from './components/BlogItem';
import Gallery from './components/Gallery';
import Info from './components/Info';

function App() {  

  const itemNumber = window.location.pathname.includes("/blog/") ? parseInt(window.location.pathname.slice(6)) : 0
  const [currentItem, setCurrentItem] = useState(itemNumber);
    
  const onTitleClick =(id)=>{
    setCurrentItem(id)        
  };
  
  return (    
   
      <div className="flex-container">
      <Header onTitleClick={onTitleClick}/>
        <div className="content-container">
          <Route path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog onTitleClick={onTitleClick}/>
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path={`/blog/${currentItem}`}>
            <BlogItem onTitleClick={onTitleClick} currentItem={currentItem}/>
          </Route>
        </div>
      <Footer />
    </div>
 
  );
}

export default App;
