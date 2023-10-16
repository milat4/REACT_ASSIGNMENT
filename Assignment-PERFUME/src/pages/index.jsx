import React from 'react';

function Index() {
  return (
    <div className="container">
      <div className="img-block">
        <img src="/imgs/image-product-desktop.jpg" alt="" />
      </div>
      <div className="info-block">
        <div className="logo">
          <p>PERFUME</p>
        </div>
        <div className="heading">
          <h3>Gabrielle Essence Eau De Parfum</h3>
        </div>
        <div className="text">
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL
          </p>
        </div>
        <div className="price">
          <p className="green">$149.99</p>
          <p><span className="crossed">$169.99</span></p>
        </div>
        <div className="button">
          <button type="submit"><span className="icon">Add to cart</span></button>
        </div>
      </div>
    </div>
  );
}

export default Index;
