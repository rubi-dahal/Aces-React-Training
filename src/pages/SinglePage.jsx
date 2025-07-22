import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SinglePage = () => {
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  const { id } = useParams();
  const fetchBlogById = async (id) => {
    const response = await axios.get(
      `https://687af359abb83744b7ee4691.mockapi.io/blogs/${id}`
    );
    if (response) {
      console.log(response.data);
      setBlog(response.data);
      let userIdLocalStorage = localStorage.getItem("userId");
      let isAuthenticated = localStorage.getItem("isAuthenticated");
      if (
        response.data.authorId == userIdLocalStorage &&
        isAuthenticated == "true"
      ) {
        setIsUser(true);
      }
    }
  };
  async function deleteBlog() {
    const response = await axios.delete(
      `https://687af359abb83744b7ee4691.mockapi.io/blogs/${id}`
    );
    // console.log(response.data)
    if (response) {
      goBack();
      toast.success("Blog Deleted!");
    }
  }
  useEffect(() => {
    fetchBlogById(id);
  }, [id]);

  return (
    <div className="relative">
      <button
        onClick={goBack}
        className="w-[40px] h-[40px] text-2xl absolute top-1.5 right-1.5 text-gray-800 dark:text-white rounded-full shadow-md hover:bg-amber-100 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        x
      </button>
      {blog && (
        <div className="w-full h-full bg-white dark:bg-gray-800">
          <div className="w-full mx-auto py-10 bg-white dark:bg-gray-800">
            {/*  */}

            {/*  */}

            {/* Blog Cover */}
            <img
              src={blog.Image}
              alt="Blog Cover"
              className="xl:w-[80%] xs:w-[96%] mx-auto lg:h-[560px] md:h-[480px] rounded-lg object-cover"
            />
            {/* Blog Info */}
            <div className="w-[95%] mx-auto flex md:gap-4 xs:gap-2  sm:gap-1 justify-center items-center pt-4">
              <div className="flex gap-2 items-center">
                <img
                  src={blog.authorImage}
                  alt="Bloger Profile"
                  className="w-[1.5rem] h-[1.5rem] sm:w-[1.8rem] sm:h-[1.8rem] md:w-[2.4rem] md:h-[2.4rem] rounded-full object-cover
r"
                />
                <h2 className="text-sm font-semibold dark:text-white sm:text-[12px]">
                  {blog.Author}
                </h2>
              </div>
              <div className="dark:text-gray-500">|</div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                {blog.createdAt}
              </h3>
              <div className="dark:text-gray-500">|</div>
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                5 MIN READ
              </h4>
            </div>

            {/* Blog */}
            <div className="py-6 bg-white dark:bg-gray-800">
              <div className="md:w-[80%] xs:w-[90%] mx-auto pt-4">
                <h1 className="text-5xl text-white bold  mt-3.5">
                  {blog.Title}
                </h1>
                <h6 className="text-2xl text-gray-200 mt-5">{blog.Subtitle}</h6>
                <p className="text-xl text-gray-300 ">{blog.Description}</p>
                <p className="text-[17px] text-gray-300 mt-5">
                  {blog.Paragraph}
                </p>
              </div>
            </div>
            {/* Conditional Rendering */}
            {isUser && (
              <div className="btn flex gap-3.5 justify-center">
                <Link to={`/edit/${id}`}>
                  <button className="w-[100px] py-2 bg-gray-700 hover:bg-purple-800 text-white text-2xl font-medium rounded transition duration-200 shadow-sm">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={deleteBlog}
                  className="w-[100px] py-2 bg-gray-700 hover:bg-purple-800 text-white text-2xl font-medium rounded transition duration-200 shadow-sm"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePage;
