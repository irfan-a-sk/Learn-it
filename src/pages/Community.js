import React from "react";
import { Link } from "react-router-dom";

// ------images----------
import teach from "../images/teach.jpg";

const Community = () => {
  return (
    <>
      <div className="bg-blue-200 flex flex-wrap p-[20px] justify-center gap-[80px] max-sm:gap-[30px]">
        <div className="mt-[50px] max-sm:mt-[10px] w-[500px] text-center">
          <h1 className="text-5xl  text-gray-800 font-bold mb-[30px] max-sm:text-3xl">
            Every expert was once a beginner.
            Embrace the journey.
          </h1>
          <p className="text-2xl  text-gray-700 mb-[30px] max-sm:text-base ">
            We offer flexibility. Be a live teacher with us. Teach from home and choose the hours, subjects & materials you want to teach. <b className='text-black'>Learn-iT...</b>
          </p>
          <Link
            className="text-xl max-sm:text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            to="/register"
          >
            Register Here
          </Link>
        </div>
        <img
          className="w-[800px] h-[500px]object-cover  "
          src={teach}
          alt="top-img"
        />
      </div>
    </>
  );
};

export default Community;
