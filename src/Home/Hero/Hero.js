import './Hero.css'
import shoe from '../../Images/hero-img.png'

export default function Hero() {
  return (
   <>
    <div className="hero-section">
        <div className="hero-content">
            <h1 className="hero-heading">Get in your ShoeZone</h1>
            <h1 className="hero-heading">Brows through our shoe line</h1>
            <h5 className="hero-subheading">Browse through our diverse range of meticulously crafted Shoes, designed to bring out your individuality and cater to your sense of style.</h5>
            <div className='hero-button' >
                <button  >Shop Now</button>
            </div>
            <div className="hero-stats">
                <div className="brands">
                    <h2>200+</h2>
                    <p>International Brands</p>
                </div>
                <div className="quality">
                    <h2>2000+</h2>
                    <p>High Quality Products</p>
                </div>
                <div className="customers">
                    <h2>30000+</h2>
                    <p>Happy Customers</p>
                </div>
                
            </div>
        </div>
        <div className="hero-image">
            <img src={shoe} alt="shoe" />
        </div>
    </div>      

    
   </>
  )
}




