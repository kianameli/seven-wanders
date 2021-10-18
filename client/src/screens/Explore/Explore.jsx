import { useState, useEffect } from 'react'
import './Explore.css'
import Layout from '../../components/Layout/Layout'
import SectionDivider from '../../components/SectionDivider/SectionDivider'
import Search from '../../components/Search/Search.jsx'
// eslint-disable-next-line
import SearchBy from '../../components/SearchBy/SearchBy'
import ContinentBar from '../../components/ContinentBar/ContinentBar.jsx'
import StoryCard from '../../components/StoryCard/StoryCard'
import { getStories } from '../../services/stories.js'

export default function Explore(props) {
  const { continentFilter, setContinentFilter } = props;
  const [stories, setStories] = useState([]);
  const [searchResults, setSearchResults] = useState(['initial state'])
  // const [searchByField,setSearchByField]=useState('title')

  useEffect(() => {
    const fetchStories = async () => {
      const allStories = await getStories()
      setStories(allStories)
      if (continentFilter !== '') {
        const filteredStories = allStories.filter(story => {
          return story.continent === continentFilter
        })
        setSearchResults(filteredStories)
      } else {
        setSearchResults(allStories)
      }
    }
    fetchStories()
    // eslint-disable-next-line
  }, [])

  // function handleSearchBy(field) {
  //   if (field != '' && field != undefined) {
  //     setSearchByField(field)
  //   }
  // }

  // function handleSearch(event) {
  //   const searchValue = event.target.value.toLowerCase()
  //   // if (searchResults.length === 0) {
  //   //   setSearchResults(stories)
  //   // } else
  //     if (searchValue != '') {
  //     const results = searchResults.filter(story => {
  //       // story[searchByField].toLowerCase().includes(searchValue)
  //       story.title.toLowerCase().includes(searchValue)
  //     })
  //     setSearchResults(results)
  //     console.log(searchResults)
  //   }
  //   console.log(stories[0].title,searchValue,searchResults)
  // }
  function handleContinentClick(continent) {
    let results
    if (continent === continentFilter) {
      results = stories
      setContinentFilter(prev=>'')
    } else {
      results = stories.filter(story => {
        return (story.continent === continent)
      })
      setContinentFilter(continent)
    } 
    setSearchResults(results)
  }

  function handleSearch(event) {
    const searchValue = event.target.value.toLowerCase()
    const results = stories.filter(story => {
      return (story.title.toLowerCase().includes(searchValue))
    })
    setSearchResults(results)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  // console.log(continentFilter)
  return (
    <Layout user={props.user}>
      <div className='explore-banner-container'>
        <div className='explore-banner-flex'>
          <div className='explore-banner-text'>Explore</div>
          <Search className='search-bar' handleSearch={handleSearch} handleSubmit={handleSubmit} />
          {/* <SearchBy handleSearchBy={handleSearchBy} handleSubmit={handleSubmit}/> */}
        </div>
      </div>

      <SectionDivider text='Continents' />
      <div className="continent-bar-div">
      <ContinentBar continentFilter={continentFilter} setContinentFilter={setContinentFilter} handleContinentClick={handleContinentClick} linksOn={false} />
      </div>

      <SectionDivider text='Stories' />
      <div className='stories-section'>
        <div className="stories-section-mapped-container">
        <div className='mapped-images'>
          {searchResults.map((story, index) => <StoryCard key={index} story={story} />)}
        </div>
        </div>
      </div>
    </Layout >
  )
}
