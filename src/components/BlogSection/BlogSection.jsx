import React from "react";
import blog1 from "../../assets/image/blog1.avif";
import blog2 from "../../assets/image/blog2.avif";
import blog3 from "../../assets/image/blog3.avif";

const blogs = [
  {
    image: blog1,
    title: "Top 5 Luxury Rooms for Your Next Stay",
    date: "October 10, 2025",
    author: "Admin",
    description:
      "Discover our most luxurious and comfortable rooms designed to give you the ultimate relaxation and experience.",
  },
  {
    image: blog2,
    title: "How to Make the Most of Your Vacation",
    date: "October 15, 2025",
    author: "Admin",
    description:
      "A few simple travel tips can make your stay more enjoyable. Explore our guide for your perfect getaway.",
  },
  {
    image: blog3,
    title: "A Taste of Paradise in Our Restaurant",
    date: "October 20, 2025",
    author: "Chef Daniel",
    description:
      "Enjoy world-class dining at our restaurant where each dish is crafted with passion and local ingredients.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 xl:px-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h4 className="font-PT text-lg md:text-xl text-gray-600">Our Blog</h4>
        <h1 className="text-4xl md:text-5xl font-Playfair py-4 text-[#4b4b4b] ">
          Latest News & Articles
        </h1>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
          >
            {/* Blog Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>{blog.date}</span>
                <span>By {blog.author}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#4b4b4b] mb-3 transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                {blog.description}
              </p>

              <button className="text-[#f3bc8e] font-semibold hover:text-[#eda574] transition-colors duration-300">
                Read More...
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
