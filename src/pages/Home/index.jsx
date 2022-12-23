import { useEffect } from 'react'

const iconChat = require('../../assets/img/icon-chat.png')
const iconMoney = require('../../assets/img/icon-money.png')
const iconSecurity = require('../../assets/img/icon-security.png')

/**
 * Root element of the app
 */
function Home() {
  useEffect(() => {
    document.title = 'Argent Bank - Accueil'
  }, [])

  return (
    <main className="home main">
      <div className="home__hero">
        <section className="home__hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="home__hero-subtitle">No fees.</p>
          <p className="home__hero-subtitle">No minimum deposit.</p>
          <p className="home__hero-subtitle">High interest rates.</p>
          <p className="home__hero-text">
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className="home__features">
        <h2 className="sr-only">Features</h2>
        <div className="home__feature-item">
          <img
            src={iconChat}
            alt="Feature Icon"
            className="home__feature-item-icon"
          />
          <h3 className="home__feature-item-title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="home__feature-item">
          <img
            src={iconMoney}
            alt="Chat Icon"
            className="home__feature-item-icon"
          />
          <h3 className="home__feature-item-title">
            More savings means higher rates
          </h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="home__feature-item">
          <img
            src={iconSecurity}
            alt="Security Icon"
            className="home__feature-item-icon"
          />
          <h3 className="home__feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home
