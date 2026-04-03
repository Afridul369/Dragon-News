import React, { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const CategoryCard = ({ news }) => {
     const [showFull, setShowFull] = useState(false);
  return (
    <div className="bg-base-100  rounded-lg  space-y-4 mb-5 px-4 pb-4">
      
      {/* Author Section */}
      <div className="flex items-center justify-between bg-[#f3f3f3] rounded-t-xl p-3">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{news.author.name}</h2>
            <p className="text-sm text-gray-400">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 text-xl">
          <CiBookmark size={24}/>
          <CiShare2 size={24}/>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold">{news.title}</h1>

      {/* Image */}
      <img
        src={news.image_url}
        alt=""
        className="w-full rounded-lg"
      />

      {/* Details */}
      <p className="text-sm text-gray-500">
      {showFull ? (
        news.details
      ) : (
        <>
          {news.details.slice(0, 150)}...
          <span
            onClick={() => setShowFull(true)}
            className="text-orange-500 font-semibold cursor-pointer hover:underline ml-1"
          >
            Read More
          </span>
        </>
      )}
    </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-300">
        
        {/* Rating */}
        <div className="flex items-center gap-2 text-orange-400">
          {[...Array(news.rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 ml-2">
            {news.rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;