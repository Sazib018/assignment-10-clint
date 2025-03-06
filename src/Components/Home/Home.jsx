import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import BlogSection from './BlogSection/BlogSection';
import Populer from './Populer/Populer';
import ProductCard from './Product/ProductCard';

const Home = () => {
    return (
        <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
       <ProductCard></ProductCard>
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