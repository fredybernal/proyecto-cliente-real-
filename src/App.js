import React from 'react';
import './App.css';
import NavBar from './components/nav_bar/nav_bar';
import Header from './components/header/header';
import Main from './components/body/Main';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
