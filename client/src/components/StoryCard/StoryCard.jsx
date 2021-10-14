import { Link } from 'react-router-dom'
import './StoryCard.css'

export default function StoryCard(props) {
  const {_id,title,location,country,imageURL}=props.story
  
  return (
    

    <Link
      to={`/stories/${_id}`}
      className='story-card-container'
      >
      
      <div className='story-card-image-container'>
        <img className='stories-image'
          src={imageURL}
          alt={title}
          />
        <p>{title}</p>
        <p>{location}, {country}</p>
      </div>
      
    </Link>
          
  )
}
