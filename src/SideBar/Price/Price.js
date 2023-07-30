import Input from '../../Components/Input'
import './Price.css'
export default function Price({handleChange}) {
  return (
    <div>
      <div className="sidebar-title price-title">Price</div>
      <Input handleChange={handleChange}  value={50} title='$0 - $50' name='Price' />
      <Input handleChange={handleChange}  value={100} title='$50 - $100' name='Price' />
      <Input handleChange={handleChange}  value={150} title='$100 - $150' name='Price' />
      <Input handleChange={handleChange}  value={200} title='$200 ' name='Price' />
    </div>
  )
}
