import { useReducer } from 'react'
import { messageReducer } from './messageReducer'
import './Projects.css'
import { Container } from '@mui/system'

const initialstate = {
  text:
    'Click any button above to view the relevant Project details and project link too.I have created this portfolio website using react reducer,materialUI, css3 ,jsx and html5.',
  projectLink: '',
}

const Projects = () => {
  const buttonStyle = {
    width: '20%',
  }

  const [state, dispatch] = useReducer(messageReducer, initialstate)
  const handleProduct = () => {
    dispatch({
      type: 'PRODUCT-FILTER',
    })
  }

  const Login = () => {
    dispatch({
      type: 'LOGIN',
    })
  }

  const Profile = () => {
    dispatch({ type: 'PROFILE' })
  }

  const Doorstep = () => {
    dispatch({ type: 'DOOR' })
  }

  const Dsj = () => {
    dispatch({ type: 'DSJ' })
  }

  const Shoppingcart = () => {
    dispatch({ type: 'SHOPPING' })
  }

  return (
    <Container maxWidth="sm">
      <div className="projects-button">
        <button
          onClick={handleProduct}
          className="--btn --btn-danger "
          style={buttonStyle}
        >
          Product-Filter
        </button>
        <button
          onClick={Login}
          className="--btn --btn-primary "
          style={buttonStyle}
        >
          Animated-loginRegister
        </button>
        <button
          onClick={Profile}
          className="--btn --btn-success "
          style={buttonStyle}
        >
          Dynamic-ProfileApp
        </button>
        <button
          onClick={Doorstep}
          className="--btn --btn-danger "
          style={buttonStyle}
        >
          NDIScare
        </button>
      </div>
      <div className="description">{state.text}</div>
      <div className="description">{state.projectLink}</div>
    </Container>
  )
}

export default Projects
