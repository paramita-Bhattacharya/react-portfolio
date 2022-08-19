import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const linkStyle = {
    color: 'white',

    padding: '10px',
  }

  return (
    <div className="--flex-center navd">
      <nav>
        <Link to={'/'} style={linkStyle}>
          Home
        </Link>
        <Link to={'/Projects'} style={linkStyle}>
          Projects
        </Link>
      </nav>
    </div>
  )
}
export default Navbar
