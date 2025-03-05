import React from 'react';
import Banner from './Banner/Banner';
import ProductList from './Product/ProductList';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <ProductList></ProductList>
      </div>
      <div>
       <Categories></Categories>
      </div>
        </div>
    );
};

export default Home;