import { FaArrowRight, FaLaptop, FaPlay} from 'react-icons/fa'
import {FiLayers, FiShield} from 'react-icons/fi'
import {HiOutlineRocketLaunch} from 'react-icons/hi2'
import './WhyChooseUs.scss';

function WhyChooseUs() {
    return (
        <section>
           <article className='why-heading'>
            <div>
            <h5 className='small-text'>WHY CHOOSE US</h5>
            <h2>Best Trust Rating and Satisfaction</h2>
            </div>
            <button>Get Started</button>
            </article> 
            <article className='cards'>
                <div className='card card1'>
                    <div>
                    <h3>Integrated Payment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button>Learn More<FaArrowRight/></button>
                    </div>
                    <div className='icons'>
                        <figure className='icon icon1'>
                    <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/logo5.png" width={30} height={30} alt="" />
                    </figure>
                    <figure className='icon icon2'>
                    <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/logo1.png" width={30} height={30} alt="" />
                    </figure>
                    <figure className='icon icon3'>
                    <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/logo2.png" width={30} height={30} alt="" />
                    </figure>
                    <figure className='icon icon4'>
                    <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/logo4.png" width={30} height={30} alt="" />
                    </figure>
                    <figure className='icon icon5'>
                    <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/logo3.png" width={30} height={30} alt="" />
                    </figure>
                    <figure className='icon icon6'>
                    <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/logo6.png" width={30} height={30} alt="" />
                    </figure>
                </div>
                </div>
                <div className='card card2'>
            <h3><span><FiShield/></span>Security Features</h3>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            
        </div>
        <div className='card card3'>
        <h3><span><FaLaptop/></span>Security Features</h3>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            
        </div>
        <div className='card card4'>
        <h3><span><FiLayers/></span>Security Features</h3>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            
        </div>
        <div className='card card5'>
        <h3><span><HiOutlineRocketLaunch/></span>Security Features</h3>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            
        </div>
                
            </article>

            <article className='how-it-works'>
                
               <div className='how-it-works-text'>
                <h5 className='small-text'>SEE HOW IT WORKS</h5>
                <h2>The New Way of Money Transfer</h2>
                <p>Fusce porta, felis et facilisis tincidunt, metus eros mollis nibh, venenatis tempor arcu massa a augue. Suspendisse mattis arcu mi, id fringilla urna accumsan in. Nam ornare nunc metus.</p>
                <button>Learn More</button>
                <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/bg.png" alt="" className='flower' />
                </div>
                <div className='how-it-works-img-container'>
                    <figure className='how-it-works-img'>
                        <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/side-view-of-asian-millennial-girl-in-headphones-v-SQ3PSL2.jpg" alt="" />
                        <span><FaPlay /></span>
                    </figure>
                    </div> 
            </article>
        </section>
    )
}

export default WhyChooseUs
