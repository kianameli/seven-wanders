import { useState, useEffect } from 'react'
import { createStory } from '../../services/stories'
import { Redirect } from 'react-router-dom'
import './StoryCreate.css'
import Layout from '../../components/Layout/Layout'
import SectionDivider from '../../components/SectionDivider/SectionDivider'

export default function StoryCreate(props) {

  console.log('story create render')
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
      {/* // <div className='test'>STORY CREATE {story.location}</div> */}
      <div className='create-banner-container'>
        <h4 className='banner-text'>Tell your story</h4>
      </div>
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
          <button type='submit' className='create-submit-button'>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}
