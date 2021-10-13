import './ContinentBar.css'
import Africa from './continent-images/Africa.png'
import Asia from './continent-images/Asia.png'
import SouthAmerica from './continent-images/SouthAmerica.png'
import NorthAmerica from './continent-images/NorthAmerica.png'
import Antarctica from './continent-images/Antarctica.png'
import Europe from './continent-images/Europe.png'
import Australia from './continent-images/Australia.png'


export default function ContinentBar() {
  const continents=[Asia,SouthAmerica,Antarctica,Africa,Australia,NorthAmerica,Europe]
  
console.log(continents[1].split(' ').join(''))
  function handleClick(e) {
    e.preventDefault()
    console.log(e.target.name)
  }

  return (
    <div className='continent-bar'>
      {continents.map((continent,index) => {
        return <div className='continent-button'
          //onClick={(e) => handleClick(e)}
          // name={continent}
          key={index}
        >
          <img src={Africa} alt={continent} />
          {/* <p>{continent}</p> */}
        </div>
      })}
    </div>
  )
}
