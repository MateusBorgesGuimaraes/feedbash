import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { UserStorage } from "./Context/UserContext";
import User from "./pages/User/User";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import PostsPage from "./pages/PostsPage/PostsPage";
import SinglePost from "./pages/SinglePost/SinglePost";
import PostsPageCategory from "./pages/PostsPageCategory/PostsPageCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="posts-page/" element={<PostsPage />} />
            <Route path="posts/:id" element={<PostsPageCategory />} />
            <Route path="post/:id" element={<SinglePost />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
