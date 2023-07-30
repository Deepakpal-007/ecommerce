import React from 'react'

export default function Input({value,title,name,handleChange}) {
  return (
    <>
         <label htmlFor="catagory"    className="sidebar-label-container">
                <input onChange={handleChange} type="radio" id='category' name={name} value={value}/> 
                
                {title}
         </label>
    </>
  )
}
