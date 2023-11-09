import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer"

import blog1 from "../Images/blog1.webp";
import blog2 from "../Images/blog2.webp";
import blog3 from "../Images/blog3.webp";
import blog5 from "../Images/blog5.webp";
import blog6 from "../Images/blog6.webp";
import blog7 from "../Images/blog7.webp";
import blog8 from "../Images/blog8.webp";
import blog4 from "../Images/blog4.webp";

const Blog = () => {
  const blog = [
    {
      blogImage: blog1,
      blogType: "Nfts",
      blogTime: "2min",
      blogTitle: "Ayan Dog Gif",
    },
    {
      blogImage: blog2,
      blogType: "MARKETING",
      blogTime: "2min",
      blogTitle: "Decentraland and Meta Verse",
    },
    {
      blogImage: blog3,
      blogType: "DIGITAL ART",
      blogTime: "2min",
      blogTitle: "Beeple Everydays The First 10 Days",
    },
    {
      blogImage: blog4,
      blogType: "DESIGN",
      blogTime: "2min",
      blogTitle: "More important feature for designer",
    },
    {
      blogImage: blog5,
      blogType: "DESIGN",
      blogTime: "2min",
      blogTitle: "Videos releases Car drive",
    },
    {
      blogImage: blog6,
      blogType: "CONDOLANCE",
      blogTime: "2min",
      blogTitle: "NFT's are too important for best artists",
    },
    {
      blogImage: blog7,
      blogType: "GIF IMAGE",
      blogTime: "2min",
      blogTitle: "NFT for Better",
    },
    {
      blogImage: blog8,
      blogType: "MARKETING",
      blogTime: "2min",
      blogTitle: "NFTs can be offer marketing opportunities",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="pt-[100px]">Our Blog</div>
      <div className="flex flex-wrap mx-16 justify-between">
        {/* Render the blog items using map */}
        {blog.map((blogItem, index) => (
          <div className="m-4 px-5 border w-[300px]  py-4 rounded-lg shadow-lg" key={index}>
            <a href={blogItem.blogImage} target="_self">
            <img 
              className="w-[300px] h-auto"
              src={blogItem.blogImage}
              alt={blogItem.blogTitle}
            /></a>
            <div className="flex justify-between mt-2">
              <div>{blogItem.blogType}</div>
              <div>{blogItem.blogTime}</div>
            </div>
            <div className="text-[20px] font-bold">{blogItem.blogTitle}</div>
            
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
