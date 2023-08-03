import React from 'react'
import Input from '../../Components/Input'
import './Colors.css'

export default function Colors({handleChange}) {
  return (
    <div>
        <div className="sidebar-title color-title">Colors</div>
      {/* <Input value='' title='All'  /> */}
      <Input handleChange={handleChange}  value='black' title='Black'  />
      <Input handleChange={handleChange}  value='blue' title='Blue'  />
      <Input handleChange={handleChange}  value='red' title='Red'  />
      <Input handleChange={handleChange}  value='pink' title='Pink'  />
    </div>
  )
}
