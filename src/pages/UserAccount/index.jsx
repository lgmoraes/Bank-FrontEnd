import { useEffect } from 'react'

function UserAccount() {
  useEffect(() => {
    document.title = 'Argent Bank - Votre compte'
  }, [])

  return (
    <main className="userAccount main bg-dark">
      <div className="userAccount__header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="userAccount__edit-button">Edit Name</button>
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

export default UserAccount
