import './FeaturedStories.css'
import { getStories } from '../../services/stories.js'
import { useEffect, useState } from 'react';

export default function FeaturedStories() {
  const [featuredStories, setFeaturedStories] = useState([])
  
  useEffect(() => {

    const fetchStories = async () => {
      const allstories = await getStories();
      setFeaturedStories(allstories.slice(0, 3))
    }
    fetchStories();
  }, [])

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
          <h1>{story.title}</h1>
        )
      })}
    </div>
  )
}
