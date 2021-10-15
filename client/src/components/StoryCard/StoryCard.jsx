import { Link } from 'react-router-dom'
import placeholderImage from '../../images/compass.png'
import './StoryCard.css'

export default function StoryCard(props) {
  const {_id,title,location,country,imageURL}=props.story
  
  return (
    
    <div className='story-card-image-container'>
    <Link
      to={`/stories/${_id}`}
      className='story-card-container'
      >
        <img className='stories-image'
          src={imageURL}
          onError={(e) => { e.target.src = placeholderImage}}
          alt={title}
        />
    </Link>
        <p>{title}</p>
        <p>{location}, {country} </p>
      </div>
      
          
  )
}
