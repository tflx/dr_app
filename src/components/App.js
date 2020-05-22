import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Themes from './themes/Themes';
import './App.scss'

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Themes />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
