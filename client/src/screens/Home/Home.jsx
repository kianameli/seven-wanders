import "./Home.css";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import ContinentBar from "../../components/ContinentBar/ContinentBar";
import FeaturedStories from "../../components/FeaturedStories/FeaturedStories";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function Home(props) {
  return (
    <Layout user={props.user}>
   
      <div className="home-page-title">
        
        <img
        className="home-page-banner"
        src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fres.cloudinary.com%2Fdyyjvyqtn%2Fimage%2Fupload%2Fv1634060377%2F33pOL_apxepy.jpg"
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
        
          <SectionDivider text='Explore'/>
    
        <ContinentBar />
      </div>

      {/* featured stories */}
      <div className="featured-stories">
        
        <SectionDivider text='Featured Stories'/>
        
        <FeaturedStories />
      </div>

      {/* tell your story */}
      <div className="tell-your-story">
        <SectionDivider text= 'Tell Your Story'/>
      
    <SignUpForm/>
      </div>
    </Layout>
  );
}
