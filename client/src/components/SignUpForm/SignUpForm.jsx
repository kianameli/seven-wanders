
import { useState } from 'react'
import './SignUpForm.css'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'

const SignUpForm = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
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
      return <button type='submit'>Submit</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <>
      <div className='sign-up-background'>
      <img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fres.cloudinary.com%2Fdyyjvyqtn%2Fimage%2Fupload%2Fv1634060377%2F33pOL_apxepy.jpg' alt='sign-up-background' />
      </div>
      <div className='form-container'>
        <h1 className='sign-up-title'>Create Account</h1>
        <h3 className='sign-up-message'>Become a member to tell your story</h3>
        <form onSubmit={onSignUp}>
          
          <input
            required
            type='text'
            name='username'
            value={username}
            placeholder='Username'
            onChange={handleChange} />
          
          <input
            required
            type='email'
            name='email'
            value={email}
            placeholder='Email Address'
            onChange={handleChange} />
          
          <input
            required
            name='password'
            value={password}
            type='password'
            placeholder='Password'
            onChange={handleChange} />
          
          <input
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            type='password'
            placeholder='Confirm Password'
            onChange={handleChange} />
          {renderError()}
        </form>
      </div>
    </>
  )
}

export default SignUpForm
