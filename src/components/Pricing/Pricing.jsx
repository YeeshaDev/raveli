import {FaCheck} from 'react-icons/fa'
import './Pricing.scss'
export default function Pricing() {
  return (
   <section className='pricing-content'>
    <article className='pricing-text'>
        <div>
        <h5 className='small-text'>PRICING PLAN</h5>
        <h2>The Way to a Safer Business Deals</h2>
        </div>
        <button>Contact Us</button>
    </article>
    <article className='pricing-cards'>
        <div className='card card1'>
            <h2>$9.50 <span>/ User</span></h2>
            <h3>Basic Plan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            <hr />
            <h6>What´s included?</h6>
            <ul>
                <li><span><FaCheck/></span> All Full Access</li>
                <li><span><FaCheck/></span> Special Premium</li>
                <li><span><FaCheck/></span>Update Include</li>
                <li><span><FaCheck/></span> 24/7 Full Support</li>
            </ul>
            <button>Get Started</button>
        </div>

        <div className='card card2'>
            <h2>$10.50 <span>/ User</span></h2>
            <h3>Startup Plan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            <hr />
            <h6>What´s included?</h6>
            <ul>
                <li><span><FaCheck/></span> All Full Access</li>
                <li><span><FaCheck/></span> Special Premium</li>
                <li><span><FaCheck/></span>Update Include</li>
                <li><span><FaCheck/></span> 24/7 Full Support</li>
            </ul>
            <button>Get Started</button>
        </div>

        <div className='card card3'>
            <h2>$12.00 <span>/ User</span></h2>
            <h3>Deluxe Plan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            <hr />
            <h6>What´s included?</h6>
            <ul>
                <li><span><FaCheck/></span> All Full Access</li>
                <li><span><FaCheck/></span> Special Premium</li>
                <li><span><FaCheck/></span>Update Include</li>
                <li><span><FaCheck/></span> 24/7 Full Support</li>
            </ul>
            <button>Get Started</button>
        </div>
    </article>
   </section>
  )
}
