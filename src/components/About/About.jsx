import {FaChrome, FaShoppingBasket, FaWrench} from 'react-icons/fa'
import './about.scss'
export default function About() {
  return (
    <section className='about-content'>
        <figure className='about-images'>
            <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/shape_Asset-4.png" width={150} height={150} alt="flower"  className='raveli'/>
            <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/happy-african-teenager-holding-cell-phone-using-mo-B6WZNZE-e1675420454910.jpg"  alt="man hero" className='man-hero' />
            <img decoding="async" loading="lazy" width="200" height="400"
            className="phone"
             src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/PSD-04-1-509x1024.png"  alt="" srcSet="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/PSD-04-1-509x1024.png 509w, https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/PSD-04-1-149x300.png 149w, https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/PSD-04-1-768x1546.png 768w, https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/PSD-04-1-763x1536.png 763w, https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/PSD-04-1-800x1610.png 800w, https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/PSD-04-1.png 842w"
             sizes="(max-width: 509px) 100vw, 509px"/>
        </figure>

        <article className='about-details'>
            <h5 className='small-text'>About Raveli</h5>
            <h2>Make Your Transactions Quick and Easy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae rhoncus ipsum. Nunc eleifend ultrices ligula eu pharetra. </p>
            <div className='about-cards'>
            <div className='card1'>
                <span><FaChrome/></span>
                <h3>Cross-Browser</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='card2'>
                <span><FaWrench/></span>
                <h3>Amazing Features</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='card3'>
                <span><FaShoppingBasket/></span>
                <h3>Easy Payment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            </div>
        </article>
    </section>
  )
}
