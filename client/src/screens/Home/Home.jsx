import "./Home.css";
import Layout from "../../components/Layout/Layout";
import ContinentBar from "../../components/ContinentBar/ContinentBar";
import FeaturedStories from "../../components/FeaturedStories/FeaturedStories";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function Home(props) {
  const { user, setUser, continentFilter, setContinentFilter } = props

  function handleContinentClick(continent) {
    console.log('handleContinentClick called from home')
    setContinentFilter(continent)
  }

  return (
    <Layout user={user}>
      <div className="home-banner-container">
        <div className="home-banner-text">Let's Wander
          
          <p className="home-banner-description">
            Seven Wanders highlights trips to destinations around our wanderful
            planet. Explore other wanderers' stories for inspiration or tell us
            about your own adventures!
          </p>

        </div>
      </div>
      {/* explore section */}
      <div className="explore-section">

        <SectionDivider text='Explore' />
        <ContinentBar continentFilter={continentFilter} setContinentFilter={setContinentFilter} handleContinentClick={handleContinentClick} linksOn={false} />
      </div>

      {/* featured stories */}
      <div className="featured-stories">

        <SectionDivider text='Featured Stories' />

        <FeaturedStories />
      </div>

      {/* tell your story */}
      {!user && 
        <div className="tell-your-story">
          <SectionDivider text='Tell Your Story' />

          <SignUpForm user={user} setUser={setUser} />
        </div>
      }
    </Layout>
  );
}
