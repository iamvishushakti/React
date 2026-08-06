import { useParams } from "react-router-dom";
import Blog from "../components/blog/Blog";
import CategoryCom from "../components/home/Category";

export default function Category(){
    const {slug} = useParams();
    return (<>
    {/* {slug} */}
    <CategoryCom CategoryType={slug}/>
    <Blog CategoryType={slug} />
    </>);
}