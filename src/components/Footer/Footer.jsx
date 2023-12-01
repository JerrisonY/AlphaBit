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

function Footer() {
  return (
    <>
        <div className='tos-container'>
            Reward rates are subject to change and compliance with Kraken's terms and conditions. These materials are for general information purposes only and are not investment advice or a recommendation or solicitation to buy, sell, stake or hold any cryptoasset or to engage in any specific trading strategy. Some crypto products and markets are unregulated, and you may not be protected by government compensation and/or regulatory protection schemes. The unpredictable nature of the cryptoasset markets can lead to loss of funds. Tax may be payable on any return and/or on any increase in the value of your cryptoassets and you should seek independent advice on your taxation position. Margin, futures and opt-in rewards are subject to certain geographic limitations and eligibility criteria. For more information, please see our Terms of Service.
        </div>
        <footer className='footer-container'>
            <div className='f-first-c'>
                First Section
            </div>

            <div className='f-second-c'>
                {features.map((feature, index) => (
                    <a key={index} href='#' className='footer-link'>
                        {feature}
                    </a>  
                ))}
            </div>

            <div className='f-third-c'>
                {prices.map((price, index) => (
                    <a key={index} href='#' className='footer-link'>
                    {price}
                </a>  
                ))}
            </div>

            <div className='f-fourth-c'>
                Fourth Section
            </div>
        </footer>
    </>
  )
}

export default Footer