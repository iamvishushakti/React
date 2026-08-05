import "../../assets/css/Category.css"
export default function Category() {

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
                    <button
                        key={index}
                        className="category-btn"
                    >
                        {category}
                    </button>
                ))
            }

        </div>
    );
}