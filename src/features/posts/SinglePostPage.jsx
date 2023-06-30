import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";

const SinglePostPage = ({ post }) => {
    // retrieve postId

    const post = useSelector((state) => selectPostById(state,postId))

    if(!post) {
        return(
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }

    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}
export default PostsExcerpt