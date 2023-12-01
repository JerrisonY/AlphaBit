import React from 'react'
import './Footer.css'

const features = [
    'NFT Marketplace',
    'Margin Trading',
    'Futures Trading',
    'OTC Trading',
    'Institutions',
    'API Trading',
    'Staking Rewards',
    'All features',
]

const prices = [
    'Bitcoin Price',
    'Ethereum Price',
    'Dogecoin Price',
    'XRP Price',
    'Cardano Price',
    'Solana Price',
    'Litecoin Price',
    'All crypto prices',
]

const buyingGuides = [
    'Buy Bitcoin',
    'Buy Ethereum',
    'Buy Dogecoin',
    'Buy XRP',
    'Buy Cardano',
    'Buy Solana',
    'Buy Litecoin',
    'All crypto guides',
]

function Footer() {
  return (
    <>
        <div className='tos-container'>
            Reward rates are subject to change and compliance with Kraken's terms and conditions. These materials are for general information purposes only and are not investment advice or a recommendation or solicitation to buy, sell, stake or hold any cryptoasset or to engage in any specific trading strategy. Some crypto products and markets are unregulated, and you may not be protected by government compensation and/or regulatory protection schemes. The unpredictable nature of the cryptoasset markets can lead to loss of funds. Tax may be payable on any return and/or on any increase in the value of your cryptoassets and you should seek independent advice on your taxation position. Margin, futures and opt-in rewards are subject to certain geographic limitations and eligibility criteria. For more information, please see our Terms of Service.
        </div>
        <footer className='footer-container'>
            <div className='f-first-c'>
                <img src="/images/logo.svg" alt="" />
                <p>Take your crypto <br /> trading to the next level.</p>
                <button className='f-create-btn'><a href='#'>Create account</a></button>
                <button className='f-sign-btn' ><a href='#'>Sign in</a></button>
            </div>

            <ul className='f-second-c'>
                <li className='footer-category'>Features</li>
                {features.map((feature, index) => (
                    <li><a key={index} href='#' className='footer-link'>
                        {feature}
                    </a></li>  
                ))}
            </ul>

            <ul className='f-third-c'>
                <li className="footer-category">Browse Prices</li>
                {prices.map((price, index) => (
                    <li><a key={index} href='#' className='footer-link'>
                    {price}
                    </a></li>  
                ))}
            </ul>

            <ul className='f-fourth-c'>
                <li className="footer-category">Buying Guides</li>
                {buyingGuides.map((guide,index) => (
                    <li><a key={index} href='#' className='footer-link'>
                    {guide}
                    </a></li>  
                ))}
            </ul>

            <div className='footer-social-c'>
                <p className='footer-category-community'>Community</p>
                <a href='https://www.reddit.com/' target='_blank'><i class="fa-brands fa-reddit-alien"></i></a>
                <a href='https://www.facebook.com/' target='_blank'><i class="fa-brands fa-facebook-f"></i></a>
                <a href='https://discord.com/' target='_blank'><i class="fa-brands fa-discord"></i></a>
                <a href='https://www.instagram.com/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
            </div>
        </footer>
    </>
  )
}

export default Footer