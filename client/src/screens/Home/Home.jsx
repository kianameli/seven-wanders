import "./Home.css";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import ContinentBar from "../../components/ContinentBar/ContinentBar";
import FeaturedStories from "../../components/FeaturedStories/FeaturedStories";

export default function Home(props) {
  return (
    // <Layout>
    <>
      <div className="home-page-title">
        <img
          className="home-page-banner"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Orwell-Bridge.jpg/2560px-Orwell-Bridge.jpg"
          alt="banner"
        ></img>
        <div className="home-title-words">
          <h3 className="home-title-title">Lets Wander</h3>
          <p className="home-title-description>">
            Seven Wanders highlights trips to destinations around our wanderful
            planet. Explore other wanderers' stories for inspiration or tell us
            about your own adventures!
          </p>
        </div>
      </div>
      {/* explore section */}
      <div className="explore-section">
        <div className="explore-section-title">
          <p className="title-bar">Explore</p>
        </div>
        <ContinentBar />
      </div>

      {/* featured stories */}
      <div className="featured-stories">
        <div className="featured-stories-title">
          <p className="title-bar">Featured Stories</p>
        </div>
        <FeaturedStories />
      </div>

      {/* tell your story */}
      <div className="tell-your-story">
        <div className="tell-your-story-title">
          <p className="title-bar">Tell your Story</p>
        </div>
      </div>
      <div></div>
    </>
    // </Layout>
  );
}
