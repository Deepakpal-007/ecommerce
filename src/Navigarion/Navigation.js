import Button from '../Components/Button'
import'./Navigation.css'

export default function Navigation({handleInputChange,handleChange}) {
  return (
            <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Shoe-Store </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <Button handleChange={handleChange} title='Nike' value='Nike' />
                        </li>
                        <li className="nav-item">
                            <Button handleChange={handleChange} title='Adidas' value='Adidas' />
                        </li>
                        <li className="nav-item">
                            <Button handleChange={handleChange} title='Puma' value='Puma' />
                        </li>
                        <li className="nav-item">
                            <Button handleChange={handleChange} title='Vans' value='Vans' />
                        </li>
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Shoes" aria-label="Search" onChange={handleInputChange} />
                        
                    </form>
                    </div>
                </div>
                </nav>
            </div>
  )
}
