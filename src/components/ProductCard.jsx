
const ProductCard=({product})=>(
    <div style ={{
        // display:"flex",
        border:"1px solid #ccc",
        padding:"10px",
        textAlign:"center",
        borderRadius:"5px"
    }}>
        <p><b>{product.title}</b></p>
        <img src={product.image} alt={product.title} width="150" height="150"></img>
        <p>Rating:{product.rating.rate}</p>
        <p>Category:{product.category}</p>
        <p>Description:{product.description}</p>
        <p>price:{product.price}</p>
        <span>
            <button>buy</button>
            <button>add </button>
        </span>
    </div>
);
export default ProductCard;