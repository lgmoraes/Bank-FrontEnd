import { Link } from 'react-router-dom'

const logo = require('../../assets/img/argentBankLogo.png')

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__nav-logo" href="./index.html">
          <img
            className="header__nav-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="header__nav-item" href="./signIn.html">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
