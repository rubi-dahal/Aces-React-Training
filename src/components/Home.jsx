import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Hero from "./Hero";

const Home = () => {
  const [data, setData] = useState(null);
  async function fetchBlogs() {
    const response = await axios.get(
      "https://687af359abb83744b7ee4691.mockapi.io/blogs"
    );

    if (response) {
      setData(response.data);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-4">
        <section className="bg-white dark:bg-gray-800">
          <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
            <div id="blogg" className="text-center py-10">
              <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
                Title
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, temporibus!
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {data && data.map((blog) => <Card key={blog.id} blog={blog} />)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
