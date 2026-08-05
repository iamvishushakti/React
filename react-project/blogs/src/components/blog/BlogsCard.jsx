import DefaultBlog from "../../assets/images/blog/de-blog.jpg";
export default function BlogsCard(props) {
    const {blogData} = props;
    return (
        <div className="col-lg-4 col-md-6">

            <div className="blog-card">

                {/* Image */}

                <div className="blog-image">
                    <img
                        src={blogData.image || DefaultBlog}
                        alt={blogData.title}
                        className="blog-image"
                        onError={(e)=>{
                            e.target.src = DefaultBlog;
                        }}
                    />
                </div>
                <div className="p-4">
                    <h4 className="blog-title">
                        {blogData.title}
                    </h4>
                    <p className="blog-description">
                        {blogData.description.substring(0,60)}...
                    </p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="blog-category">
                            @{blogData.category}
                        </span>
                        <small className="blog-date text-right">
                            {blogData.author.name} |  {blogData.createdAt} 
                            <br/> Total View : {blogData.views} 
                        </small>
                    </div>
                    <div className="blog-footer">
                        <div className="blog-stats">
                            <span className="stat like">
                                ❤️ <span>{blogData.stats.likes}</span>
                            </span>
                            <span className="stat comment">
                                💬 <span>{blogData.stats.comments}</span>
                            </span>
                        </div>
                        <a href="#" className="read-more">
                            Read More →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}