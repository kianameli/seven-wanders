import { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'

const SignIn = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        username: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign In</button>
    }
  }

  const { username, password } = form

  return (
    <><div className='sign-in-background'>
      <img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fres.cloudinary.com%2Fdyyjvyqtn%2Fimage%2Fupload%2Fv1634060377%2F33pOL_apxepy.jpg' alt='sign-in-back' />
    </div><div className='form-container'>
        <h1>Dive back in</h1>
        <form onSubmit={onSignIn}>

          <input
            required
            type='text'
            name='username'
            value={username}
            placeholder='Username'
            onChange={handleChange} />

          <input
            required
            name='password'
            value={password}
            type='password'
            placeholder='Password'
            onChange={handleChange} />
          {renderError()}
        </form>
      </div></>
  )
}

export default SignIn
