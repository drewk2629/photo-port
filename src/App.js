import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'Commercial',
      descripton: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { 
      name: 'Portraits', 
      descripton: 'Portraits of people in my life'
    },
    {
      name: 'Food',
      descripton: 'Delicious delicacies'
    },
    {
      name: 'Landscape',
      descripton: 'Fields, farmhouses, waterfalls, and the beauty of nature'
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}>
      </Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
