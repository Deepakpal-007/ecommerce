import React from 'react'
import Input from '../../Components/Input'
import './Category.css'

export default function Category({handleChange}) {
  return (
    <div>
        <h2 className="sidebar-title">
            Catageory
        </h2>

        <div>

            
            <Input handleChange={handleChange}  title='All' value='' name='category'/>
            <Input handleChange={handleChange}   title='Nike' value='Nike' name='category'/>
            <Input handleChange={handleChange}  title='Adida' value='Adidas' name='category'/>
            <Input handleChange={handleChange}  title='Puma' value='Puma' name='category'/>
            <Input handleChange={handleChange}  title='Vans' value='Vans' name='category'/>
            
        </div>


    </div>
  )
}
