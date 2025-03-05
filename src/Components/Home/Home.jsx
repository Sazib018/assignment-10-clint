import React from 'react';
import Banner from './Banner/Banner';
import ProductList from './Product/ProductList';
import Categories from './Categories/Categories';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import BlogSection from './BlogSection/BlogSection';
import Populer from './Populer/Populer';

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
      <div>
        <CustomerReviews></CustomerReviews>
      </div>
      <div>
        <BlogSection></BlogSection>
      </div>
      <div>
        <Populer></Populer>
      </div>
        </div>
    );
};

export default Home;