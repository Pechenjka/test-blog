import React, { useEffect } from "react";

import { Link, Redirect, useParams } from "react-router-dom";
import { handlerGetDetailPost } from "../../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./styles.module.scss";

const DetailPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailPost, detailPostLoading, detailPostError } = useSelector((state) => state.detailPost);

  useEffect(() => {
    dispatch(handlerGetDetailPost(id));
  }, [dispatch, id]);

  return (
    <>
      {detailPostLoading && <p>loading...</p>}
      {detailPostError && <Redirect to={"/:id/not-found"} />}
      <div className={Styles.detailPost}>
        <h4 className={Styles.detailPost__title}>{detailPost.title}</h4>
        <img className={Styles.detailPost__image} src={detailPost.image} alt="photoPost" />
        <p className={Styles.detailPost__time}>{new Date(detailPost.createdAt).toUTCString()}</p>
        <p className={Styles.detailPost__text}>{detailPost.description}</p>
        <Link className={Styles.detailPost__link} to="/">
          Come back
        </Link>
      </div>
    </>
  );
};

export default DetailPost;
