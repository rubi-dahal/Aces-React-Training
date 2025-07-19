import React from "react";
import { Link } from "react-router-dom";

const Card = ({ ...blog }) => {
  console.log(blog);
  return (
    <div>
      <Link to={`/single-page/${blog.blog.id}`}>
        <div className="relative">
          <a
            href="#_"
            className="block overflow-hidden group rounded-xl shadow-lg"
          >
            <img
              src={blog.blog.Image}
              className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
              alt="Adventure"
            />
          </a>
          <div className="relative mt-5">
            <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
              {blog.blog.createdAt}
            </p>
            <a href="#" className="block mb-3 hover:underline">
              <h2 className="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                {blog.blog.Title}
              </h2>
            </a>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {blog.blog.Subtitle}
            </p>
            <Link
              to={`/single-page/${blog.blog.id}`}
              className="font-medium underline text-purple-600 dark:text-purple-400"
            >
              Read More
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
