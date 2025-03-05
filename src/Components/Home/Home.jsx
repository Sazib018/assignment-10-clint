import React from 'react';
import Banner from './Banner/Banner';
import ProductList from './Product/ProductList';

const Home = () => {
    return (
        <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <ProductList></ProductList>
      </div>
        </div>
    );
};

export default Home;