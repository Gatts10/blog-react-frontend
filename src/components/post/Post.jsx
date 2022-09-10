import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const categories = [post.category];

  return (
    <div className="post">
      <img className="postImg" src={post.thumbnail} alt="postImg" />
      <div className="postInfo">
        <div>
          {categories.map((category) => (
            <span className="postCat" key={post.category_id}>
              {category.name}
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/posts/${post.id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{post.created_at}</span>
      </div>
      <p className="postDesc">{post.content}</p>
    </div>
  );
}