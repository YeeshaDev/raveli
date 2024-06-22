import {BiCheckShield} from 'react-icons/bi'
import {FaDelicious,FaBuffer,FaEye,FaHeadphones, FaArrowRight} from 'react-icons/fa'
import {FaEarthAfrica} from 'react-icons/fa6'
import './Features.scss'
export default function Feature() {
  return (
    <section className='features-content'>
        <h5 className='small-text'>OUR FEATURES</h5>
        <h2>Cashless Payments Made Possible</h2>
        <article className='features-details'>
        <div className='cards'>
            <span><FaBuffer /> Security Features</span>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            <button>Learn more <FaArrowRight/></button>
        </div>
        <div className='cards'>
            <span><FaDelicious /> Pixel Perfect</span>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            <button>Learn more <FaArrowRight/></button>
        </div>
        <div className='cards'>
            <span><BiCheckShield /> Clean Coding</span>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            <button>Learn more <FaArrowRight/></button>
        </div>
        <div className='cards'>
            <span><FaEarthAfrica /> Fast Servers</span>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            <button>Learn more <FaArrowRight/></button>
        </div>
        <div className='cards'>
            <span><FaEye /> Retina Ready</span>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            <button>Learn more <FaArrowRight/></button>
        </div>
        <div className='cards'>
            <span><FaHeadphones /> Fast Support</span>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            <button>Learn more <FaArrowRight/></button>
        </div>
        </article>
    </section>
  )
}
