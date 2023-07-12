import react from "react"
import { ReactDOM } from "react";

import Searchbox from "./Searchbox";
import Infopage from "./Infopage";
const Search =()=>{
return (
    <>
     <div className="container  grid grid-cols-30/90    h-screen"> 
      <Searchbox />
     <Infopage/>
    
     </div>
    </>
)
}
export default Search;