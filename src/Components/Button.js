export default function Button({handleChange,title,value}) {
  return (
    <button className='nav-link active' onClick={handleChange} value={value} >{title}</button>
  )
}
