import './StoryCreate.css'
import { createStory } from '../../services/stories'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Redirect } from 'react-router-dom'

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
    return <Redirect to={`/exlore`} />
  }

  return (
    <Layout user={props.user}>
    <div className='create-form-container'>
      <form className='create-form' onSubmit={handleSubmit}>
        <input
          className='input-title'
          placeholder='Give your story a title...'
          value={story.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-imageUrl'
          placeholder='post your image Url here'
          value={story.imageURL}
          name='imageURL'
          required
          onChange={handleChange}
        />
        <input
          className='input-location'
          placeholder='e.g., Maafushi Island'
          value={story.location}
          name='location'
          required
          onChange={handleChange}
        />
        <input
          className='input-country'
          placeholder='e.g., The Maldives'
          value={story.country}
          name='country'
          required
          onChange={handleChange}
        />
        <input
          className='input-continent'
          placeholder='e.g., Asia'
          value={story.continent}
          name='continent'
          required
          onChange={handleChange}
        />
        <input
          className='input-story'
          placeholder='Write your story here...'
          value={story.story}
          name='story'
          required
          onChange={handleChange}
        />
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
   </Layout>
  )
}
