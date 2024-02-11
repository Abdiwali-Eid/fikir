import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import TopCategories from '../components/homePage/TopCategories';
// import TopAuthour from '../components/homePage/TopAuthors';
import SEO from '../components/seo';
import TopAuthors from '../components/homePage/TopAuthors';
// import AuthorList from '../templates/author-list';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
      <TopAuthors/>
      {/* <AuthorList/> */}
      {/* <TopAuthour/> */}
    </div>
  </>
);

export default IndexPage;
