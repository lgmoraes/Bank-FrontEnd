import { useSelector, useStore } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { selectUserIsConnected, selectUserToken } from '../../utils/selectors'
import { BASE_URL } from '../../utils/contantes'
import { logout } from '../../features/userLogin'

const logo = require('../../assets/img/argentBankLogo.png')

function Header() {
  const store = useStore()
  const token = useSelector(selectUserToken)
  const navigate = useNavigate()
  const userConnected = useSelector(selectUserIsConnected)

  const { data } = useQuery('profile', async () => {
    if (!token) return

    const response = await fetch(BASE_URL + '/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cache: 'default',
    })
    const data = await response.json()
    return data
  })

  function handleLogout() {
    store.dispatch(logout())
    navigate('/')
  }

  const { firstName } = data?.body ?? {}

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
              <i className="fa fa-user-circle"></i> {firstName}
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
