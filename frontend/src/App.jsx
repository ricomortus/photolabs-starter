// frontend/src/App.jsx
import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from '../src/mocks/photos';
import topics from '../src/mocks/topics';

 const App = () => (
   <div className="App">
     {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
     <HomeRoute photos={photos} topics={topics}/>
   </div>
 )


export default App;
