import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
import { login } from '../../features/userLogin'
import { selectUserLogin } from '../../utils/selectors'

function Login() {
  const store = useStore()
  const navigate = useNavigate()
  const [signing, setSigning] = useState(false)
  const user = useSelector(selectUserLogin)

  function send() {
    login(store, {
      email: document.getElementById('username').value,
      password: document.getElementById('password').value,
    })
  }

  useEffect(() => {
    document.title = 'Argent Bank - Se connecter'
  }, [])

  useEffect(() => {
    if (user.status === 'void') return

    if (user.status === 'pending' || user.status === 'updating') {
      setSigning(true)
      return
    }

    if (signing === false) return

    if (user.status === 'rejected') {
      setSigning(false)
      console.warn(user.error)
      return
    }

    if (user.status === 'resolved') navigate('/profile')
  }, [user, signing, navigate])

  return (
    <main className="signIn main bg-dark">
      <section className="signIn__content">
        <i className="fa fa-user-circle signIn-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="signIn__inputWrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="signIn__inputWrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="signIn__inputRemember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="button" className="signIn__button" onClick={send}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login
