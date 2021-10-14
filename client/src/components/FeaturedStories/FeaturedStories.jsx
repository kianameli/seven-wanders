import './FeaturedStories.css'
import { getStories } from '../../services/stories.js'
import { useState } from 'react';
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
  
  //setFeaturedStories(allstories.slice(0, 3))

  // for (emptyArr.length < 3) {
    //   let x = Math.floor(Math.random() * allStories.length)
    //   if (!emptyArr.includes(x)) {
  //     emptyArr.push(x);
  //   }
  // }
  //console.log(emptyArr);

  return (
    <div>
      featured
      {featuredStories?.map(story => {
        return (
          <StoryCard story={story}/>
          // <h1>{story.title}</h1>
        )
      })}
    </div>
  )
}
