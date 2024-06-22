
import './Stats.scss'
export default function Stats() {
  return (
    <section>
    <article className='stats-content'>
       
       <span>
        <h3>140 k+</h3>
        <p>Active Users</p>
        
        </span> 
       
        <span>
        <h3>12 k+</h3>
        <p>Total Downloads</p>
        
        </span> 
        <span>
        <h3>99.5%</h3>
        <p>Positive Feedback</p>
        
        </span> 
        <span>
        <h3>$ 12 M+</h3>
        <p>Total Transaction</p>
        
        </span> 
    </article>

    <article className='design-content'>
    <div className=''>
            <h5 className='small-text'>MINDFUL DESIGN</h5>
            <h2>The New Way of Doing Business</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae rhoncus ipsum. Nunc eleifend ultrices ligula eu pharetra. </p>
            <figure className='download-logos'>
              <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/app-store-png-logo-33124.png" width={150} alt="apple" /> 
              <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/play-store-png-logo-33123.png" width={150} alt="google play" /> 
            </figure>
        </div>
        <figure className='phone-mockup'>
            <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/PSD-02-1.png" width="450" alt="" />
        </figure>
        
    </article>
    </section>
  )
}
