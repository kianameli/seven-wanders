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
        <div className="footer-info">
          <NavLink className="logo" to="/">Seven Wanders</NavLink>
          <NavLink className="github-logo" to="https://github.com/kianameli/seven-wanders"><img src="https://www.figma.com/file/EWdJkmivVUxyx8961P0dRI/Team-Awesome-team-library?node-id=432%3A4" /></NavLink>
        </div>

        <div className="team-contact">
          <h2>Team Contact</h2>
          <NavLink to="https://github.com/kianameli">Kian Ameli</NavLink>
          <NavLink to="https://github.com/sheevashab">Sheeva Shabahang</NavLink>
          <NavLink to="https://github.com/Ian-Flaherty">Ian Flaherty</NavLink>
          <NavLink to="https://github.com/JosephMcElroy83">Joseph McElroy</NavLink>
        </div>

        <div className="links">
          {user && <NavLink to="/sign-out">Sign Out</NavLink>}
          {user && <NavLink to="/story-create">Create</NavLink>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>

      </div>
    </footer>
  )
}
export default Nav
