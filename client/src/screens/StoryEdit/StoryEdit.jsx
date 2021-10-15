import '../StoryCreate/StoryCreate.css'
import { updateStory, getStory } from '../../services/stories'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import SectionDivider from '../../components/SectionDivider/SectionDivider'
import { useParams, Redirect } from 'react-router-dom'

export default function StoryEdit(props) {

  const [story, setStory] = useState({ location: '', country: '', continent: '', title: '', author: '', story: '', imageURL: '', userId: '', });
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
    setIsUpdated(prev => !prev)
  }

  if (isUpdated) {
    return <Redirect to={`/stories/${id}`} />
  }

  return (
    <Layout user={props.user}>
      <div className='create-banner-container'>
        <h4 className='create-banner-text'>Change your story</h4>
      </div>
      <div className='create-form-container'>
        <form className='create-form' onSubmit={handleSubmit}>

          <SectionDivider text='Title' />
          <input
            className='create-form-input'
            placeholder={story.title}
            value={story.title}
            name='title'
            required
            // autoFocus
            onChange={handleChange}
          />

          <SectionDivider text='Image Link' />
          <input
            className='create-form-input'
            placeholder={story.imageURL}
            value={story.imageURL}
            name='imageURL'
            required
            onChange={handleChange}
          />

          <SectionDivider text='Location' />
          <input
            className='create-form-input'
            placeholder={story.location}
            value={story.location}
            name='location'
            required
            onChange={handleChange}
          />

          <SectionDivider text='Country' />
          <input
            className='create-form-input'
            placeholder={story.country}
            value={story.country}
            name='country'
            required
            onChange={handleChange}
          />

          <SectionDivider text='Continent' />
          <input
            className='create-form-input'
            placeholder={story.continent}
            value={story.continent}
            name='continent'
            required
            onChange={handleChange}
          />

          <SectionDivider text='Story' />
          <textarea
            className='create-form-input'
            placeholder={story.story}
            value={story.story}
            name='story'
            required
            onChange={handleChange}
            rows={10}
          />

          <button type='submit' className='edit-submit-button'>Save</button>

        </form>
      </div>
    </Layout>
  )
}
