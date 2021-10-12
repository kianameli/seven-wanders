import './StoryDetail.css'
import Layout from '../../components/Layout/Layout'
import { getStory } from '../../services/stories'
import { useState } from 'react';
import { useParams } from 'react-router';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import { Link } from 'react-router-dom';

export default function StoryDetail(props) {
  const [theStory, setTheStory] = useState({});
  const {_id,title,location,country,continent,author,story,imageURL}=theStory
  const { id } = useParams()
  

  const fetchStory = async (storyID) => {
    const aStory = await getStory(storyID)
      setTheStory(aStory)
  }
  fetchStory(id)
  

  return (
    <Layout user={props.user}>

      <div>
        <br/><br/><br/>
        <SectionDivider text={`${country}, ${continent}`} />
        <h1>{title}</h1>
        <p>by {author}</p>
        <img src={imageURL} alt={location} />
        <section>{story}</section>
        <Link to={`/stories/${id}/edit`}><button>Edit Story</button></Link>
        {/* <Link to={`/stories/${id}/edit`}><button onClick={handleDelete}>Delete Story</button></Link> */}
    </div>
    </Layout>
  )
}
