import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <div className="main-wrapper">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;