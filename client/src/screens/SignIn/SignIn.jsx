import {  useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const SignIn = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      console.log("onSignIn Form: ", form);
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
      return <button className='submit-button' type='submit'>Sign In</button>
    }
  }

  const { username, password } = form

  return (
    <Layout>

      <div className='sign-in-background'>
        <div className='form-container'>
          <h1 className='sign-in-header'>Dive back in</h1>
          <form onSubmit={onSignIn}>
            <input className='sign-in-input'
              required
              type='text'
              name='username'
              value={username}
              placeholder='| Username'
              onChange={handleChange} />
            <input className='sign-in-input'
              required
              name='password'
              value={password}
              type='password'
              placeholder='| Password'
              onChange={handleChange} />
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignIn
