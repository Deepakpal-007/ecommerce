import './App.css';
import SideBar from './SideBar/SideBar';
import products from './DB/data'
import {useState} from 'react'
import Card from './Components/Card';
import Product from './Product/Product';

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)


  const handleChange = event =>{
    setSelectedCategory(event.target.value)
  }

  const filteredData = (products,selectedCategory) =>{

    let filterdProducts = products


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
      <SideBar handleChange={handleChange} />
      <Product result={result}/>
    </div>
  );
}

export default App;
