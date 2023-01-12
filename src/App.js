import React from 'react';
import './App.css';
import NavBar from './components/nav_bar/nav_bar';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
