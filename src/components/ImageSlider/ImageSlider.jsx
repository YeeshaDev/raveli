//import Slider from "./Slider";
import { ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage } from 'react-compare-slider';
import './ImageSlider.scss'
export default function ImageSlider() {
  return (
    <section>
        <article className='slider-text'>
            <h5 className='small-text'>THE DARK MODE</h5>
            <h2>Feels Great in Low-light Environments</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,  leo.</p>
            
            <ReactCompareSlider
            className='slider'
            
            style={{border:"1px solid black", borderRadius:"10px"}}
            handle={<ReactCompareSliderHandle buttonStyle={{WebkitBackdropFilter: undefined, backdropFilter: undefined, backgroundColor: 'white', border: 0, boxShadow: undefined, color: '#444', position:'relative', zIndex:'99999'}} linesStyle={{opacity: 1}} className='slider-handle'/>}
            
  itemOne={<ReactCompareSliderImage src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/02_iPhone_Mockup.jpg"  alt="Image one" className='slider-img' />}
  itemTwo={<ReactCompareSliderImage src="https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/03_iPhone_Mockup.jpg"  alt="Image two" className='slider-img' />}
  
/>
        </article>
    </section>
  )
}
