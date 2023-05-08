import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

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

// CodeWithMe
import Code from "./components/codeWithMe/Code";
import CodeQuestion from "./components/codeWithMe/CodeQuestion";
import Question from "./components/codeWithMe/Question";
import PreLoader from "./components/PreLoader/Preloader";

import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

// login request
// import { login } from "./utils/ApiUtils";
// import { ACCESS_TOKEN } from "./utils/constant";

// Articles
import Article from "./components/article/Article";
import Content from "./components/article/Content";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the preloader
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const signIn = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/signin",
          {
            username: "admin",
            password: "admin@123",
          },
          {
            withCredentials: true,
          }
        );
        console.log("response: " + response.data);
      } catch (error) {
        console.error(error);
      }
    };
    signIn();
  }, []);
  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
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
            <Route path="/Articles" element={<Article />}>
              <Route path=":articleName" element={<Content />} />
            </Route>
            <Route path="/code" element={<Code />}>
              <Route path=":question" element={<CodeQuestion />} />
            </Route>
            <Route path="codes/:que" element={<Question />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
