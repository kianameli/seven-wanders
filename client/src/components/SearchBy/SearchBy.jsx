import './SearchBy.css'

export default function SearchBy(props) {

  function handleSearchBy(event) {
    props.handleSearchBy(event.target.value)
  }

  return (
    <form className='search-by-container' onSubmit={props.handleSubmit}>
      <select className='search-by' onChange={handleSearchBy}>
        <option className='search-by-option' value='title'>Title</option>
        <option className='search-by-option' value='location'>Location</option>
        <option className='search-by-option' value='country'>Country</option>
        <option className='search-by-option' value='continent'>Continent</option>
        <option className='search-by-option' value='author'>Author</option>
        <option className='search-by-option' value='story'>Story</option>
      </select>
    </form>
  )
}
