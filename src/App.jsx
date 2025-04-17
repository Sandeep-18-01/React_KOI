import { useEffect, useState } from "react";
import Filters from "./components/Filters"
import ProductCard from "./components/ProductCard";
import SearchBox from "./components/SearchBox";

function App(){
  const [products,setProducts]=useState([]);
  const [categories,setcategories]=useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/categories")
    .then(res=>res.json())
    .then(data=>{
        setcategories(data);
    });
  },[]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    });
  },[]);

  const [filters,setFilters]=useState({
    categories:[],
    price:1000,
    rating:0,
  });
  
  const [search,setSearch]=useState("");

  const clearFilters=()=>{
    setFilters({categories:[],price:1000,rating:0});
    setSearch("");
  };

  const filteredProducts=products.filter(p=>{
    return (
      (filters.categories.length===0 || filters.categories.includes(p.category)) 
      &&
      p.price<=filters.price 
      &&
      p.rating.rate>=filters.rating 
      &&
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <div style={{display:"flex",padding:"20px"}}>
      <Filters filters={filters} setFilters={setFilters} clearFilters={clearFilters} categories={categories}/>
      <div style={{flex:1,marginLeft:"20px"}}>
        <SearchBox search={search} setSearch={setSearch}/>
        {filteredProducts.map(prod=>(
          <ProductCard key={prod.id} product={prod}/>
        ))}
      </div>
    </div>
  )
}
export default App;