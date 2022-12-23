import { useEffect } from 'react'

function SignIn() {
  useEffect(() => {
    document.title = 'Argent Bank - Se connecter'
  }, [])

  return (
    <main className="signIn main bg-dark">
      <section className="signIn__content">
        <i className="fa fa-user-circle signIn-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="signIn__inputWrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="signIn__inputWrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="signIn__inputRemember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button className="signIn__button">Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignIn
