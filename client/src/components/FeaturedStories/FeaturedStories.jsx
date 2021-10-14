import './FeaturedStories.css'
import { getStories } from '../../services/stories.js'
import { useEffect, useState } from 'react';
import StoryCard from '../StoryCard/StoryCard';

export default function FeaturedStories() {
  const [featuredStories, setFeaturedStories] = useState([])
  
  useEffect(() => {
    const fetchStories = async () => {
      const allstories = await getStories();
      let indices = [0, 1, 2]
      let featureIndices = [0, 1, 2];
      indices.forEach(i => {
        const x = Math.floor(Math.random() * allstories.length)
        if (!featureIndices.includes(x)) { featureIndices[i] = x }
      })
      setFeaturedStories([allstories[featureIndices[0]], allstories[featureIndices[1]], allstories[featureIndices[2]]])
    }
    fetchStories();
  },[]) 


  return (
    <div className='featured-stories-box'>
      
      {featuredStories?.map((story,index) => <StoryCard story={story} key={index}/>)}
    </div>
   
  )
}
