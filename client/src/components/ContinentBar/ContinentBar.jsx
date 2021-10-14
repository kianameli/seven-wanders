import './ContinentBar.css'
import Africa from './continent-images/Africa.png'
import Asia from './continent-images/Asia.png'
import SouthAmerica from './continent-images/SouthAmerica.png'
import NorthAmerica from './continent-images/NorthAmerica.png'
import Antarctica from './continent-images/Antarctica.png'
import Europe from './continent-images/Europe.png'
import Australia from './continent-images/Australia.png'
import { Link } from 'react-router-dom'

export default function ContinentBar(props) {
  const continents = [{ name: 'Asia', image: Asia },
    { name: 'South America', image: SouthAmerica },
    { name: 'Antarctica', image: Antarctica },
    { name: 'Africa', image: Africa },
    { name: 'Australia', image: Australia },
    { name: 'North America', image: NorthAmerica },
    { name: 'Europe', image: Europe }]

  return (
    <div className='continent-bar'>
      {continents.map((continent, index) => {
        const content = (
            <div className='continent-button'    
            onClick={(e) => {
<<<<<<< HEAD
              e.preventDefault();
=======
             //e.preventDefault();
>>>>>>> 9f663b66208a848497ba6c704eb6826f0bcb1269
              props.handleContinentClick(continent.name);
            }}
              name={continent.name}
              key={index}
            >
              <img className='continent-img' src={continent.image} alt={continent.name} />
              <p>{`${continent.name}`}</p>
            </div>
          )
        return (props.linksOn ?
          <Link to='/explore'>{content}</Link>
          : <div>{content}</div>
        )
      })}
    </div>
  )
}
