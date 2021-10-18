import './StoryDetail.css'
import Layout from '../../components/Layout/Layout'
import { deleteStory, getStory } from '../../services/stories'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import { Link } from 'react-router-dom';
import placeholderImage from '../../images/compass.png'
import FeaturedStories from '../../components/FeaturedStories/FeaturedStories.jsx'

export default function StoryDetail(props) {
  const [theStory, setTheStory] = useState({});
  const [isLoading,setIsLoading]=useState(true)
  //keeping _id for postMVP user edit auth
  // eslint-disable-next-line
  const { _id, title, location, country, continent, author, story, imageURL } = theStory
  const { id } = useParams()

  useEffect(() => {
    const fetchStory = async (storyID) => {
      const aStory = await getStory(storyID)
      setTheStory(aStory)
      setIsLoading(false)
    }
    fetchStory(id)
    // eslint-disable-next-line
  }, [id])

  const handleDelete = async (e) => {
    await deleteStory(_id)
  }

  if (isLoading){return (<h2>Loading...</h2>)}
  return (
    <Layout user={props.user}>
      <div className='edit-page'>
        <div className='story-detail-container'>
          <SectionDivider text={`${country}, ${continent}`} />
          <h1 className='detail-story-title'>{`${title}`}</h1>
          <p className='detail-story-author'>by {author}</p>
          <div className='detail-image-container'>
            <img src={imageURL}
              onError={(e) => { e.target.src = placeholderImage }}
              alt={location}
              className='detail-image'
            />
          </div>

          <div className='detail-story-story'>
            <section>{story}</section>
            {props.user && <div className='button-section'>
              <Link to={`/stories/${id}/edit`}><button className='edit-button'>Edit</button></Link>
              <Link to={`/explore`}><button className='delete-button' onClick={handleDelete}>Delete</button></Link>
            </div>}
          </div>


          <div className="featured-stories">
            <SectionDivider text="Featured Stories" />
            <FeaturedStories />
          </div>
        </div>
      </div>
    </Layout>
  )
}
