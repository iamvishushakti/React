import "../../assets/css/blog.css";
import BlogsCard from "./BlogsCard";
import blog_data from "../../TEM_DB/blog_data";
import { useState, useEffect } from "react";

export default function Blog() {
    const [viewpost, setviewpost] = useState(6);
    const [moreButton, setMoreButton] = useState(false);
    useEffect(()=>{
        if(blog_data.length>viewpost){
            setMoreButton(true);
        }else{
            setMoreButton(false);
        }
    },[viewpost, moreButton, setMoreButton]);
    return (
        <section className="mt-5">
            <div className="row g-4">
                {blog_data.slice(0,viewpost).map((e)=>(<BlogsCard key={e.id} blogData={e}/>))}
            </div>
            {moreButton?(<button className="readMoreBlog" onClick={()=>{setviewpost(viewpost+6)}}>
                View More 
            </button>):<></>}
            
        </section>
    );

}