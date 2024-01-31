// frontend/src/App.jsx
import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import './App.scss';


 const App = () => (
   <div className="App">
     {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
     <TopNavigation />
     <PhotoList/>
   </div>
 )


export default App;
