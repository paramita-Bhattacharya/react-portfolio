import { Link } from 'react-router-dom'

const Notfounf = () => {
  return (
    <div>
      <Link to={'/'} className="--color-primary">
        Go back to HomePage
      </Link>
      <p></p>
      This page doesn't exist
    </div>
  )
}
export default Notfounf
