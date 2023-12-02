import './JoinComp.css'
import { NavLink } from 'react-router-dom'

export default function JoinComp() {
    return (
      <section className="cta-container" id='join'>
        <span className='cta-header'>Start your crypto journey</span>
        <span className='cta-sub'>AlphaBit makes it easy to get started. Sign up
        today to buy and sell 200+ cryptocurrencies.</span>
        <NavLink to='/login' className='cta-btn'>Get started with AlphaBit</NavLink>
      </section>
    )
  }
  