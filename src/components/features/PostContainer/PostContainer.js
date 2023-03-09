import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import PostCard from '../PostCard/PostCard';

const PostContainer = () => {
  const posts = useSelector(getAllPosts);
  return (
    <div className="d-flex flex-column flex-md-row flex-wrap justify-content-around mt-3">
      {posts.map((post, index) => (
        <div key={index}>
          <PostCard
            id={post.id}
            title={post.title}
            author={post.author}
            date={post.publishedDate}
            description={post.shortDescription}
          />
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
