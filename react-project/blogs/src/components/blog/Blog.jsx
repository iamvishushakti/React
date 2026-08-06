import "../../assets/css/blog.css";
import BlogsCard from "./BlogsCard";
import { useState, useEffect, useContext } from "react";
import BlogContext from "../../Context/Blog/BlogContext";

export default function Blog(props) {
    const {getBlogData} = useContext(BlogContext);

    const CategoryType = props?.CategoryType ?? null;
    console.log(CategoryType);
    const blogData = getBlogData(CategoryType);

    const [viewpost, setviewpost] = useState(6);
    const [moreButton, setMoreButton] = useState(false);

    useEffect(()=>{
        if(blogData.length>viewpost){
            setMoreButton(true);
        }else{
            setMoreButton(false);
        }
    },[viewpost, moreButton, setMoreButton, blogData]);
    return (
        blogData.length>0 ?
        <section className="mt-5">
            <div className="row g-4">
                {blogData.slice(0,viewpost).map((e)=>(<BlogsCard key={e.id} blogData={e}/>))}
            </div>
            {moreButton?(<button className="readMoreBlog" onClick={()=>{setviewpost(viewpost+6)}}>
                View More 
            </button>):<></>}
        </section> :
        <div className="no-blog">
            <div className="no-blog-icon">
                📚
            </div>
            <h2>No Blogs Found</h2>
            <p>
                We couldn't find any blogs in this category.
                Check back later or explore another category.
            </p>
        </div>
    );
}