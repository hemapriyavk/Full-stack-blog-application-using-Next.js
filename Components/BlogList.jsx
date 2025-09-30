import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const categories = ["All", "Technology", "Startup", "Lifestyle"];

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blog");
        if (response?.data?.blogs?.length >= 1) {
          setBlogs(response?.data?.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs =
    menu === "All" ? blogs : blogs.filter((item) => item?.category === menu);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={
              menu === category
                ? "bg-black text-white py-1 px-4 rounded-sm"
                : ""
            }
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {filteredBlogs?.length > 0 ? (
          filteredBlogs?.map((item, index) => (
            <BlogItem
              key={index}
              id={item?._id}
              image={item?.image}
              title={item?.title}
              description={item?.description}
              category={item?.category}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
