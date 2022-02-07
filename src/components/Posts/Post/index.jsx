import React from "react";
import Styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetailPostAction, handlerGetDetailPost } from "../../../store/actions/actions";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const handlerClick = (id) => {
    dispatch(getDetailPostAction({}));
    dispatch(handlerGetDetailPost(id));
  };

  return (
    <>
      <div className={Styles.post}>
        <img className={Styles.post__image} src={post.image} alt="photoPost" />
        <p className={Styles.post__time}>{new Date(post.createdAt).toUTCString()}</p>
        <h4 className={Styles.post__title}>{post.title}</h4>
        <p className={Styles.post__preview}>{post.preview}</p>
        <Link className={Styles.post__link} to={`/${post.id}`} onClick={() => handlerClick(post.id)}>
          Read more
        </Link>
      </div>
    </>
  );
};

export default Post;
