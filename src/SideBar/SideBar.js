import './SideBar.css'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'

export default function SideBar({handleChange}) {
  return (
    
        <>
            {/* <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Category handleChange={handleChange}/>
                <Colors handleChange={handleChange} />
                <Price handleChange={handleChange} />
            </section> */}

            <nav className="nav flex-column sidebar" >
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>

                <Category handleChange={handleChange}/>
                <Colors handleChange={handleChange} />
                <Price handleChange={handleChange} />
                
               

                {/* <a className="nav-link active" aria-current="page" href="/">Active</a>
                <a className="nav-link" href="/">Link</a>
                <a className="nav-link" href="/">Link</a>
                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a> */}
            </nav>


            
        </>
      
    
  )
}
