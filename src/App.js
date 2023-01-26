import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";

// Blogs
import Blog from "./pages/Blog";
import Blogs from "./components/blog/blogs/Blogs";
import MyBlog from "./components/blog/MyBlog";

import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

// login request
// import { login } from "./utils/ApiUtils";
// import { ACCESS_TOKEN } from "./utils/constant";

// Articles
import ShowArticle from "./components/article/articleComponents/ShowArticle";
import Content from "./components/article/innerArticles/Content";

const App = () => {
  useEffect(() => {
    // const loginRequest = Object.assign(
    //   {},
    //   { email: "thita@gmail.com", password: "thita" }
    // );
    // login(loginRequest)
    //   .then((response) => {
    //     localStorage.setItem(ACCESS_TOKEN, response.accessToken);
    //     console.log("You're successfully logged in!");
    //   })
    //   .catch((error) => {
    //     console.log(
    //       (error && error.message) ||
    //         "Oops! Something went wrong. Please try again!"
    //     );
    //   });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blogs" element={<Blogs />}>
          <Route path=":readMoreBtn" element={<MyBlog />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/Articles" element={<ShowArticle />}>
          <Route path=":articleName" element={<Content />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
