import './App.css';
import SideBar from './SideBar/SideBar';
import products from './DB/data'
import {useState} from 'react'
import Card from './Components/Card';
import Product from './Product/Product';
import Home from './Home/Home';
import Navigation from './Navigarion/Navigation';

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')


  const handleChange = event =>{
    setSelectedCategory(event.target.value)
  }


  const handleInputChange = event =>{
    setQuery(event.target.value)
  }

  const filteredItems = products.filter((product) => 
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==-1
  || product.color.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==-1
  )

  const filteredData = (products,selectedCategory) =>{

    let filterdProducts = products

    if(query){
      filterdProducts = filteredItems
    }


    if(selectedCategory){
      filterdProducts = filterdProducts.filter(
        ({category,color,company,newPrice,title}) => 
      category === selectedCategory || 
      color === selectedCategory || 
      company === selectedCategory || 
      newPrice === selectedCategory || 
      newPrice === selectedCategory || 
      title === selectedCategory
      )
    }

    return(
      filterdProducts.map( ({img,title,star,reviews,prevPrice,newPrice}) =>
      <Card
      key={Math.random}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice} />
       )
    )

  }

  const result = filteredData(products,selectedCategory)





  return (
    <div className="App">
      <Navigation handleInputChange={handleInputChange} handleChange={handleChange} />
      <SideBar handleChange={handleChange} />
      <Product result={result}/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
