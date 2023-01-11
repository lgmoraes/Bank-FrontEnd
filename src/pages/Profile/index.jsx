import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
import {
  selectUserIsConnected,
  selectUserData,
  selectUserToken,
} from '../../utils/selectors'
import { getUserProfile, setUserName } from '../../features/userProfile'

function Profile() {
  const store = useStore()
  const navigate = useNavigate()
  const userConnected = useSelector(selectUserIsConnected)
  const token = useSelector(selectUserToken)
  const user = useSelector(selectUserData)

  const [editingName, setEditingName] = useState(false)
  const { firstName, lastName } = user ?? {}

  function updateUserName() {
    const data = {
      firstName: document.getElementById('input_firstName').value,
      lastName: document.getElementById('input_lastName').value,
    }

    setUserName(store, token, data)
    setEditingName(false)
  }

  useEffect(() => {
    if (!userConnected) navigate('/')
  }, [navigate, userConnected])

  useEffect(() => {
    document.title = 'Argent Bank - Votre compte'
    getUserProfile(store, token)
  }, [store, token])

  return (
    <main className="userAccount main bg-dark">
      <div className="userAccount__header">
        {editingName ? (
          <div>
            <h1>
              Welcome back
              <br />
              <input
                id="input_firstName"
                className="userAccount__input"
                type="text"
                defaultValue={firstName}
              />
              <input
                id="input_lastName"
                className="userAccount__input"
                type="text"
                defaultValue={lastName}
              />
              <br />
              <button className="userAccount__button" onClick={updateUserName}>
                Save
              </button>
              <button
                className="userAccount__button"
                onClick={() => setEditingName(false)}
              >
                Cancel
              </button>
            </h1>
          </div>
        ) : (
          <div>
            <h1>
              Welcome back
              <br />
              {firstName} {lastName}!
            </h1>
            <button
              className="userAccount__button"
              onClick={() => setEditingName(true)}
            >
              Edit Name
            </button>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="userAccount__account">
        <div className="userAccount__account-content-wrapper">
          <h3 className="userAccount__account-title">
            Argent Bank Checking (x8349)
          </h3>
          <p className="userAccount__account-amount">$2,082.79</p>
          <p className="userAccount__account-amount-description">
            Available Balance
          </p>
        </div>
        <div className="userAccount__account-content-wrapper cta">
          <button className="userAccount__transaction-button">
            View transactions
          </button>
        </div>
      </section>
      <section className="userAccount__account">
        <div className="userAccount__account-content-wrapper">
          <h3 className="userAccount__account-title">
            Argent Bank Savings (x6712)
          </h3>
          <p className="userAccount__account-amount">$10,928.42</p>
          <p className="userAccount__account-amount-description">
            Available Balance
          </p>
        </div>
        <div className="userAccount__account-content-wrapper cta">
          <button className="userAccount__transaction-button">
            View transactions
          </button>
        </div>
      </section>
      <section className="userAccount__account">
        <div className="userAccount__account-content-wrapper">
          <h3 className="userAccount__account-title">
            Argent Bank Credit Card (x8349)
          </h3>
          <p className="userAccount__account-amount">$184.30</p>
          <p className="userAccount__account-amount-description">
            Current Balance
          </p>
        </div>
        <div className="userAccount__account-content-wrapper cta">
          <button className="userAccount__transaction-button">
            View transactions
          </button>
        </div>
      </section>
    </main>
  )
}

export default Profile
