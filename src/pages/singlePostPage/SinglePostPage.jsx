import SinglePost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";

export default function SinglePostPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-8 mx-auto">
          <SinglePost />
        </div>
        <Sidebar className="col-4 mx-auto" />
      </div>
    </div>
  );
}