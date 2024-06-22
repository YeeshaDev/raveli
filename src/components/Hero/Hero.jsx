import './Hero.scss'
export default function Hero() {
  return (
    <section className="hero-content">
        <div className='hero-text'>
        <h5 className='small-text'>WELCOME TO RAVELI</h5>
        <h1>Making <span className="yellow-text">Digital</span><br /> Transactions <br /> Easier!</h1>
        <p>Lorem ipsum dolor sit amet, consdectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis.</p>
       <div className="hero-buttons">
        <button>Get Started</button>
        <button>Call Support</button>
       </div>
       <div className="count-images">
       <figure >
        <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/composite-collage-of-happy-diverse-multicultural-7-G8UCHFH.jpg" width={50} height="auto" alt="avatar" />
        <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/composite-collage-of-happy-diverse-multicultural-4-G8UCHFH.jpg" width={50} height="auto" alt="avatar" />
        <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/composite-collage-of-happy-diverse-multicultural-5-G8UCHFH.jpg" width={50} height="auto" alt="avatar" />
        <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/composite-collage-of-happy-diverse-multicultural-2-G8UCHFH.jpg" width={50} height="auto" alt="avatar" />
         
       </figure>
       <div className='active-users'>
            <h4>140k+</h4>
            <p>Active Users</p>
         </div>
       </div>

       </div>
       <figure className='hero-images'>
        <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/iPhone-14-Pro-Max.png" width={400} height="auto" alt="hero mockup" className='phone-mockup' />
        <img src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/shape_Asset-4.png" width={200} height={150} alt="raveli" className='flower' />
       </figure>
    </section>
  )
}
