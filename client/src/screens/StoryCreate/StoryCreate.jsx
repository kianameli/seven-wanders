
import { useState } from 'react'
import './StoryCreate.css'
import Layout from '../../components/Layout/Layout'
import { createStory } from '../../services/stories'
import { Redirect } from 'react-router-dom'
import SectionDivider from '../../components/SectionDivider/SectionDivider'

export default function StoryCreate(props) {

  const [story, setStory] = useState({
    location: '',
    country: '',
    continent: '',
    title: '',
    author: '',
    story: '',
    imageURL: '',
    userId: '',
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setStory({
      ...story,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createStory(story)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/explore`} />
  }

  return (
    <Layout user={props.user}>
      <div className='create-banner-container'>
        <h4 className='banner-text'>Tell your story</h4>
      </div>
      <div className='create-form-container'>
        <form className='create-form' onSubmit={handleSubmit}>

          <SectionDivider text='Title' />
          <input
            className='create-form-input'
            placeholder='| Give your story a title...'
            value={story.title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />

          <SectionDivider text='Image Link' />
          <input
            className='create-form-input'
            placeholder='| Post your image link here'
            value={story.imageURL}
            name='imageURL'
            required
            onChange={handleChange}
          />

          <SectionDivider text='Location' />
          <input
            className='create-form-input'
            placeholder='| e.g., Maafushi Island'
            value={story.location}
            name='location'
            required
            onChange={handleChange}
          />

          <SectionDivider text='Country' />
          <input
            className='create-form-input'
            placeholder='| e.g., The Maldives'
            value={story.country}
            name='country'
            required
            onChange={handleChange}
          />

          <SectionDivider text='Continent' />
          <input
            className='create-form-input'
            placeholder='| e.g., Asia'
            value={story.continent}
            name='continent'
            required
            onChange={handleChange}
          />

          <SectionDivider text='Story' />
          <textarea
            className='create-form-input'
            placeholder='| Write your story here...'
            value={story.story}
            name='story'
            required
            onChange={handleChange}
            rows={10}
          />
          <button type='submit' className='create-submit-button' onChange={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </Layout>

  )
}
