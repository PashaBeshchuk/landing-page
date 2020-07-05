import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Trending from './components/Trending';
import Happening from './components/Happening';
import Footer from './components/Footer';
import SizeMeRenderer from 'react-sizeme'
import NavbarMenu from './components/NavbarMenu';

function App(props) {
  const { width } = props.size
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="container col-12 box-site-content"> 
        <div className="container col-12">
          <Trending/>
          <Happening/>
        </div>  
      </div> 
      { width > 575 && <Footer/>}
    </div>
  );
}


export default SizeMeRenderer()(App);
