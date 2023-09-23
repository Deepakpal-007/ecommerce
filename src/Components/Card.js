import {BsFillBagHeartFill} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.css'



export default function Card({img,title,star,reviews,prevPrice,newPrice}) {
  return (
    <div>
       
         <div className="card" >
            <img src={img} className="card-img" alt={title} style={{width:'6rem'}} />
            <div className="card-body">
                <h5 className="card-title"  >{title}</h5>
                <section className="card-review"  >
                    {star} {star} {star} {star}
                    <span className="total-reviews">{reviews}</span>
                </section>
                <section className="card-price"  >
                    <div className="price">
                        <del>{prevPrice}</del> {newPrice}
                    </div>
                    <div className="bag">
                      <BsFillBagHeartFill className='bag-icon' />  
                    </div>
                </section>
                
                <a href="/" className="btn btn-primary" style={{marginTop:'2rem'}} >Buy</a>
            </div>
        </div>




    </div>

   
  )
}
