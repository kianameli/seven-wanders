import './Footer.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/story-create">Create</NavLink>
    <NavLink className="link" to="/sign-out">Sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">Sign Up</NavLink>
    <NavLink className="link" to="/sign-in">Sign In</NavLink>
  </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/explore">Explore</NavLink>
  </>
)
const Nav = ({ user }) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-block-one">
          <NavLink className="footer-logo" to="/">Seven Wanders</NavLink>
          <NavLink className="github-logo" to="https://github.com/kianameli/seven-wanders"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG24.png&f=1&nofb=1" alt='github logo'/></NavLink>
        </div>

        <div className="footer-block-two">
          <h2 className="footer-titles">Team Contact</h2>
          <div className="footer-github-links">
            <NavLink to="https://github.com/kianameli" className="f-link">Kian Ameli</NavLink>
            <NavLink to="https://github.com/sheevashab" className="f-link">Sheeva Shabahang</NavLink>
            <NavLink to="https://github.com/Ian-Flaherty" className="f-link">Ian Flaherty</NavLink>
            <NavLink to="https://github.com/JosephMcElroy83" className="f-link">Joseph McElroy</NavLink>
          </div>
        </div>
        <div className="footer-block-three">
          <div className="menu-links">
            <h2 className="footer-titles">Menu</h2>
            {user && <NavLink to="/sign-out">Sign Out</NavLink>}
            {user && <NavLink to="/story-create">Create</NavLink>}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>

          <div className="continent-links">
            <h2 className="footer-titles">Continents</h2>
            <NavLink className="f-link" to="/">North America</NavLink>
            <NavLink className="f-link" to="/">South America</NavLink>
            <NavLink className="f-link" to="/">Austrailia</NavLink>
            <NavLink className="f-link" to="/">Asia</NavLink>
            <NavLink className="f-link" to="/">Europe</NavLink>
            <NavLink className="f-link" to="/">Africa</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Nav
