import './Explore.css'
import Layout from '../../components/Layout/Layout'
import SectionDivider from '../../components/SectionDivider/SectionDivider'
import Search from '../../components/Search/Search'
import ContinentBar from '../../components/ContinentBar/ContinentBar'

export default function Explore(props) {
  return (
    <Layout user={ props.user }>
      <img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fres.cloudinary.com%2Fdyyjvyqtn%2Fimage%2Fupload%2Fv1634060377%2F33pOL_apxepy.jpg' alt='explore-back' />
      <h1 className='explore-title'>Explore</h1>
      <Search />
      <SectionDivider text='Continents' />
      <ContinentBar />
      <SectionDivider text='Stories' />
    </Layout>
  )
}
