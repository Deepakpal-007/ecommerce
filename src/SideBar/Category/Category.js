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

            
            <Input handleChange={handleChange}  title='All' value='' />
            <Input handleChange={handleChange}   title='Nike' value='Nike' />
            <Input handleChange={handleChange}  title='Adida' value='Adidas' />
            <Input handleChange={handleChange}  title='Puma' value='Puma' />
            <Input handleChange={handleChange}  title='Vans' value='Vans' />
            
        </div>


    </div>
  )
}
