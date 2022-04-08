import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Comment } from "./comment.js";

export const CommentList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" container-fluid mb-5   ">
      <h1 className="text-danger px-5">Comentarios</h1>
      <div className=" container">
        <div className="row">
          {store.list_comments.map((item, index) => {
            return <Comment key={index} text={item.text} user={item.user_id} />;
          })}
        </div>
      </div>
    </div>
  );
};