import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  // console.log(typeof Marquee);
  return (
    <div className="w-10/12 mx-auto my-5 p-3 ">
      <div className="flex items-center gap-10 ">
        <p className="text-white bg-secondary px-4 py-2">Latest</p>
        <Marquee.default>
          <p className="text-base-300 font-bold mr-10">
            Match Highlights: Germany vs Spain — as it happened!
          </p>
          <p className="text-base-300 font-bold mr-10">
            Match Highlights: Germany vs Spain — as it happened!
          </p>
          <p className="text-base-300 font-bold mr-10">
            Match Highlights: Germany vs Spain — as it happened!
          </p>
        </Marquee.default>
      </div>
    </div>
  );
};

export default LatestNews;
