import BlogContext from "./BlogContext";
import blog_data from "../../TEM_DB/blog_data"

import { useState } from "react";


export default function BlogContextProvider({children} ){
    const [blogData, setBlogData] = useState(blog_data??[]);

    const getBlogData = (category=null)=>{
        if(category==null){
            return blogData
        }else{
            if(category==='Trending'){
                return blogData.filter((e)=>e.stats.likes>380)
            }
            return blogData.filter((e)=>e.category===category)
        }
    }
    return (<BlogContext.Provider value={{blogData, setBlogData, getBlogData}}>
        {children}
    </BlogContext.Provider>);
} 
