import './SideBar.css'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'

export default function SideBar({handleChange}) {
  return (
    
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Category handleChange={handleChange}/>
                <Colors handleChange={handleChange} />
                <Price handleChange={handleChange} />
            </section>
        </>
      
    
  )
}
