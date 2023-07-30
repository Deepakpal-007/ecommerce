import React from 'react'
import Input from '../../Components/Input'
import './Colors.css'

export default function Colors({handleChange}) {
  return (
    <div>
        <div className="sidebar-title color-title">Colors</div>
      {/* <Input value='' title='All' name='Colors' /> */}
      <Input handleChange={handleChange}  value='black' title='Black' name='Colors' />
      <Input handleChange={handleChange}  value='blue' title='Blue' name='Colors' />
      <Input handleChange={handleChange}  value='red' title='Red' name='Colors' />
      <Input handleChange={handleChange}  value='pink' title='Pink' name='Colors' />
    </div>
  )
}
