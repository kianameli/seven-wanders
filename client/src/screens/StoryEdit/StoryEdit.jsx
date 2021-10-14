import './StoryEdit.css'
import { updateStory, getStory } from '../../services/stories'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import SectionDivider from '../../components/SectionDivider/SectionDivider'
import { useParams, Redirect } from 'react-router-dom'

export default function StoryEdit(props) {

  const [story, setStory] = useState({location: '', country: '', continent: '', title: '', author: '', story: '', imageURL: '', userId: '',});
  const [isUpdated, setIsUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchStory = async () => {
      const story = await getStory(id)
      setStory(story)
    }
    fetchStory()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setStory({
      ...story,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateStory(id, story)
    setIsUpdated(prev=>!prev)
  }

  if (isUpdated) {
    return <Redirect to={`/stories/${id}`} />
  }

  return (
    <Layout user={props.user}>
    
      <div className='edit-form-container'>
        <form className='edit-form' onSubmit={handleSubmit}>
          <SectionDivider text='Title'/>
          <input
            className='edit-input-title'
            placeholder={story.title}
            value={story.title}
            name='title'
            required
            // autoFocus
            onChange={handleChange}
          />
          
          <SectionDivider text='Image URL' />
          <input
            className='edit-input-imageUrl'
            placeholder={story.imageURL}
            value={story.imageURL}
            name='image-link'
            required
            onChange={handleChange}
          />
          
          <SectionDivider text='Location' />
          <input
            className='edit-input-location'
            placeholder={story.location}
            value={story.location}
            name='location'
            required
            onChange={handleChange}
          />
          
          <SectionDivider text='Country' />
          <input
            className='edit-input-country'
            placeholder={story.country}
            value={story.country}
            name='country'
            required
            onChange={handleChange}
          />

          <SectionDivider text='Continent'/>
          <input
            className='edit-input-continent'
            placeholder={story.continent}
            value={story.continent}
            name='continent'
            required
            onChange={handleChange}
          />
        
        <SectionDivider text='Story' />
        <input
          className='edit-input-story'
          placeholder={story.story}
          value={story.story}
          name='story'
          required
          onChange={handleChange}
        />
          
        <button type='submit' className='edit-submit-button'>Save</button>
          
      </form>
      </div>
    </Layout>
  )
}
