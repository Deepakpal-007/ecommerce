import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function Input({value,title,name,handleChange}) {
  return (
    <>
         {/* <label htmlFor="catagory"    className="sidebar-label-container">
                <input onChange={handleChange} type="radio" id='category' name='test'value={value}/> 
                
                {title}
         </label> */}
          <div className="form-check">

                <label className="form-check-label" htmlFor='catagory'>
                <input className="form-check-input" type="radio" name='test' id="catagory" value={value} onChange={handleChange}/>
                  {title}
                </label>
          </div>

    </>
  )
}


