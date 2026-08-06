import "../../assets/css/Category.css"
import { Link } from "react-router-dom";
export default function Category(props) {
    const CategoryType = props?.CategoryType??'';
    const categories = [
        "Trending",
        "News",
        "Entertainment",
        "Movies",
        "Music",
        "Sports",
        "Technology",
        "Business",
        "Travel",
        "Food",
        "Health",
        "Lifestyle",
        "Education",
        "Opinion"
    ];

    return (
        <div className="category-scroll">

            {
                categories.map((category, index) => (
                    <Link
                        key={index}
                        className= {category===CategoryType?'active category-btn':'category-btn'}
                        to={`/category/${category}`}
                    >
                        {category}
                    </Link>
                ))
            }

        </div>
    );
}