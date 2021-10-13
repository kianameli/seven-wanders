import './Explore.css'
import Layout from '../../components/Layout/Layout'
import SectionDivider from '../../components/SectionDivider/SectionDivider'
import Search from '../../components/Search/Search.jsx'
import SearchBy from '../../components/SearchBy/SearchBy'
import ContinentBar from '../../components/ContinentBar/ContinentBar.jsx'
import { useState,useEffect } from 'react'
import StoryCard from '../../components/StoryCard/StoryCard'
import { getStories } from '../../services/stories.js'

export default function Explore(props) {
  
  const [stories, setStories] = useState([]);
  const [searchByField,setSearchByField]=useState('title')

  //when Search updates via setStories, this:
  useEffect(() => {
    const fetchStories = async () => {
      const allStories = await getStories()
      setStories(allStories)
    }
    fetchStories()
  },[])

  function handleSearchBy(field) {
    if (field != '' && field != undefined) {
      setSearchByField(field)
    }
  }

  function handleSearch(event) {
    const searchValue=event.target.value
    const results = stories.filter(story => {
      story[searchByField].includes(searchValue)
    })
    setStories(results)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <Layout user={ props.user }>
  
      <img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fres.cloudinary.com%2Fdyyjvyqtn%2Fimage%2Fupload%2Fv1634060377%2F33pOL_apxepy.jpg' alt='explore-back' />
      <h1 className='explore-title'>Explore</h1>
      
      <Search handleSearch={handleSearch} handleSubmit={handleSubmit}/>
      <SearchBy handleSearchBy={handleSearchBy} handleSubmit={handleSubmit}/>
      <SectionDivider text='Continents' />
      <ContinentBar />

      <SectionDivider text='Stories' />
      <div className='stories-section'>
        {stories.map((story,index) => <StoryCard key={index} story={story} />  )}
      </div>
    </Layout>
  )
}
