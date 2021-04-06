import React from 'react';
import image from './images/background.png';
import Logo from './logo.jsx';
import Images from './images.jsx';
import Line from './line.jsx';
import Footer from './footer.jsx';
import './App.css';
function App(){
  return(
    <div
      style={{backgroundImage:`url(${image})`,
    textAlign:'center',
    backgroundSize:'cover',
    backgroundPosition:'center',
    width:'100%',
    height:'100%'}}>
      <Logo/>;
      <Line/>;
      <Images/>;
      <Line/>;
      <Footer/>;
      <p3>TM &copy; Lucasfilm Ltd. All Rights Reserved</p3>
      
    </div>
  );
}
export default App;