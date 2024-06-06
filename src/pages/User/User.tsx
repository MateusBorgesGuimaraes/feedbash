import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import { Route, Routes } from "react-router-dom";
import Posts from "./Posts/Posts";
import UserMenu from "./UserMenu/UserMenu";
import MyReviews from "./MyReviews/MyReviews";
import SaveReviews from "./SaveReviews/SaveReviews";
import AddPost from "./AddPost/AddPost";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserMenu />} />
        <Route path="add-post" element={<AddPost />} />
        <Route path="posts" element={<Posts />} />
        <Route path="my-reviews" element={<MyReviews />} />
        <Route path="save-reviews" element={<SaveReviews />} />
      </Routes>
    </section>
  );
};

export default User;
