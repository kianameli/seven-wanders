
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
    author: props.user.username,
    story: '',
    imageURL: '',
    userId: props.user.id,
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
    console.log(story)
    const created = await createStory(story)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/explore`} />
  }

  return (
    <Layout user={props.user}>
      <div className='create-banner-container'>
        <div className='create-banner-text'>Tell your story</div>
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
          <select className='create-form-select' name='continent' onChange={handleChange}>
            <option className='continent-option-placeholder' value='' disabled selected hidden>| Continent</option>
            <option className='continent-option' value='North America'>North America</option>
            <option className='continent-option' value='South America'>South America</option>
            <option className='continent-option' value='Europe'>Europe</option>
            <option className='continent-option' value='Asia'>Asia</option>
            <option className='continent-option' value='Africa'>Africa</option>
            <option className='continent-option' value='Australia'>Australia</option>
            <option className='continent-option' value='Antarctica'>Antarctica</option>
          </select>
          {/* <input
            className='create-form-input'
            placeholder='| e.g., Asia'
            value={story.continent}
            name='continent'
            required
            onChange={handleChange}
          /> */}

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
