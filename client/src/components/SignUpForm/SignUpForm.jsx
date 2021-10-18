
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
      history.push('/explore')
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
      return <button className='submit-button' type='submit'>Submit</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <>
      <div className='sign-up-background'>
        <div className='form-container'>
          <h1 className='sign-up-header'>Create Account</h1>
          <h3 className='sign-up-message'>Become a member to tell your story</h3>
          <form onSubmit={onSignUp}>
            <div className='sign-up-credentials-container'>
              <div className='sign-up-credentials'>
                <input className='sign-up-input'
                  required
                  type='text'
                  name='username'
                  value={username}
                  placeholder='| Username'
                  onChange={handleChange} />
                <input className='sign-up-input'
                  required
                  type='email'
                  name='email'
                  value={email}
                  placeholder='| Email Address'
                  onChange={handleChange} />
              </div>
              <div className='sign-up-credentials'>
                <input className='sign-up-input'
                  required
                  name='password'
                  value={password}
                  type='password'
                  placeholder='| Password'
                  onChange={handleChange} />
                <input className='sign-up-input'
                  required
                  name='passwordConfirmation'
                  value={passwordConfirmation}
                  type='password'
                  placeholder='| Confirm Password'
                  onChange={handleChange} />
              </div>
            </div>
            {renderError()}
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUpForm
