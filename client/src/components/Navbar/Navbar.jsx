import './Navbar.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink className="header-links" to="/story-create">Create</NavLink>
    <NavLink className="header-links" to="/sign-out">Sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink className="header-links" to="/sign-up">Sign Up</NavLink>
    <NavLink className="header-links" to="/sign-in">Sign In</NavLink>
  </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/explore">Explore</NavLink>
  </>
)
const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="header-logo" to="/">Seven Wanders</NavLink>
        <div className="header-links">
          {user && <div className="header-welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav
