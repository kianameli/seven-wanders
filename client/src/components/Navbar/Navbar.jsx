import './Navbar.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink className="header-link" id="create-link" to="/story-create">Create</NavLink>
    <NavLink className="header-link" id="sign-out-link" to="/sign-out">Sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink className="header-link" id="sign-up-link" to="/sign-up">Sign Up</NavLink>
    <NavLink className="header-link" id="sign-in-link" to="/sign-in">Sign In</NavLink>
  </>
)

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="header-logo" to="/">Seven Wanders</NavLink>
        <div className="header-links">
          {user && <div className="header-welcome">Welcome, {user.username}</div>}
          <div className="links-container">
          <div className="header-link">
          <NavLink to="/explore">Explore</NavLink>
          </div>
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav
