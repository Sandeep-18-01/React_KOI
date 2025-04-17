const SearchBox=({search,setSearch})=>(
    <input
    type="text"
    placeholder="Search Products"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    style={{width:"100%",padding:"10px",marginBottom:"20px"}}
    />
);
export default SearchBox;