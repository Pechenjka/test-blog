import React from "react";
import Styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { showPostsAction } from "../../store/actions/actions";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, showPosts, error, loading } = useSelector((state) => state.posts);

  const handlerShowMorePosts = (data) => {
    dispatch(showPostsAction(posts.slice(0, data.length + 6)));
  };

  return (
    <section className={Styles.posts}>
      <h1 className={Styles.posts__title}>Блог</h1>
      {error && <p>error on server</p>}
      {loading && <p>loading...</p>}
      <div className={Styles.posts__conatiner}>
        {showPosts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
        {posts.length !== showPosts.length && (
          <button className={Styles.posts__button} onClick={() => handlerShowMorePosts(showPosts)}>
            More posts...
          </button>
        )}
      </div>
    </section>
  );
};
export default Posts;
