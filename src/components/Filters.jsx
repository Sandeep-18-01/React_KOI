import React from "react";

const Filters=({filters,setFilters,clearFilters,categories})=>{
 
    const ratings=[1,2,3,4,5];
    return (
        <div style={{width:"250px"}}>
            <h3>Filters</h3>
            <div>
        <strong>Categories</strong>
        {
            categories.map(cat=>(
                <div key={cat}>
                    <input type="checkbox"
                    checked={filters.categories.includes(cat)}
                    onChange={()=>{
                        const newCats=filters.categories.includes(cat)
                        ? filters.categories.filter(c=>c!==cat)
                        : [...filters.categories,cat];
                        setFilters({...filters,categories:newCats});
                    }}
                    />
                    {cat}
                </div>
            ))}
            </div>

            <div>
                <strong>Price range</strong>
                <input 
                type="range"
                min="0"
                max="1000"
                value={filters.price}
                onChange={(e)=>setFilters({...filters,price:e.target.value})}
                />
                <span> Up to ${filters.price}</span>
            </div>

            <div>
                <strong>rating</strong>
                {
                    ratings.map(r=>(
                        <div key={r}>
                            <input
                            type="radio"
                            name="rating"
                            checked={filters.rating===r}
                            onChange={()=>setFilters({...filters,rating: r})}
                            />
                            {r} & up
                            </div>
                    ))
                }
            </div>
            <button onClick={clearFilters}>clear</button>
            </div>  
    );
}
export default Filters;