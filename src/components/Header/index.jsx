import { useSelector, useStore } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectUserIsConnected } from '../../utils/selectors'
import { logout } from '../../features/userLogin'

const logo = require('../../assets/img/argentBankLogo.png')

function Header() {
  const store = useStore()
  const navigate = useNavigate()
  const userConnected = useSelector(selectUserIsConnected)

  function handleLogout() {
    store.dispatch(logout())
    navigate('/')
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__nav-logo" to="/">
          <img
            className="header__nav-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {userConnected ? (
          <div className="header__nav-items">
            <Link className="header__nav-item" to="/userAccount">
              <i className="fa fa-user-circle"></i> Tony
            </Link>
            <div className="header__nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign out
            </div>
          </div>
        ) : (
          <div className="header__nav-items">
            <Link className="header__nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i> Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
