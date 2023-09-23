import { Link } from 'react-router-dom'
import Button from '../Components/Button'
import'./Navigation.css'
import logo from '../Images/logo.png'
import search from '../Images/frame.svg'
import shoping from '../Images/shoping-cart.svg'
import login from '../Images/login.svg'

export default function Navigation({handleInputChange,handleChange}) {
  return (
            // <div>
            //         <nav className="navbar navbar-expand-lg bg-body-tertiary">
            //     <div className="container-fluid">
            //         <a className="navbar-brand" href="/">Shoe-Store </a>
            //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                       
            //             <li className="nav-item">
            //                 <Button handleChange={handleChange} title='Nike' value='Nike' />
            //             </li>
            //             <li className="nav-item">
            //                 <Button handleChange={handleChange} title='Adidas' value='Adidas' />
            //             </li>
            //             <li className="nav-item">
            //                 <Button handleChange={handleChange} title='Puma' value='Puma' />
            //             </li>
            //             <li className="nav-item">
            //                 <Button handleChange={handleChange} title='Vans' value='Vans' />
            //             </li>
                        
            //         </ul>
            //         <form className="d-flex" role="search">
            //             <input className="form-control me-2" type="search" placeholder="Search Shoes" aria-label="Search" onChange={handleInputChange} />
                        
            //         </form>
            //         </div>
            //     </div>
            //     </nav>
            // </div>

            <>
                <div className="nav-bar">
                    <img className='logo-img' src={logo} alt="logo" />
                      <ul className='nav-menu' >
                        <li>Shop</li>
                        <li>On sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                      </ul>
                      <div className='search-login'>

                        <div className="nav-search">
                          <img src={search} alt="search" />
                          <input type="search" placeholder='search'  />
                        </div>
                        <div className="shoping-cart">
                          <img src={shoping} alt="shoping-cart" />
                          <img src={login} alt="login" />
                        </div>
                      </div>
                </div>

            </>
  )
}
