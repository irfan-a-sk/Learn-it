import React from "react";
import { Link } from "react-router-dom";

// ---------Images-------------
import close from "../images/close.png";
import register from "../images/register.jpg";

const Teachlogin = () => {
  return (
    <>
      <main className="relative justify-center flex bg-gray-200">
      <img
        className="absolute w-[100%] h-[650px] max-md:h-[250px] max-sm:h-[270px] object-cover object-top  p-[20px] max-sm:p-[0px]"
        src={register}
        alt="register-img"
      />
        <div className="relative  w-[400px] h-[600px] max-sm:w-[250px] max-sm:h-[250px] bg-transparent  p-[50px] rounded-md m-[130px] mb-[-80px] max-sm:m-[10px] max-sm:p-[2px] ">
          <Link to="/">
            <img
              src={close}
              alt="close-img"
              className="w-[40px] absolute top-[2%] right-[5%]"
            />
          </Link>
          <div>
            <h1 className="text-[30px] font-bold text-blue-700 mb-[20px]">
              Log In
            </h1>
            <h3 className="text-right text-[14px] mb-[20px]">
            Don't have an account?
              <Link to="/register" className="text-blue-700 font-semibold">
                {" "}
                Register
              </Link>
            </h3>
            <div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="email"
                  placeholder="Email"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
              <div className="flex gap-2 mt-[20px] rounded-md shadow-sm">
              <Link to="/">
                <p className="text-[16px] max-sm:text-[13px] text-center text-black p-[10px] py-[5px] max-sm:w-[120px] w-[145px] border-2 border-gray-300 rounded-lg ">
                  Forget Password?
                </p>
              </Link>
              <Link to="/">
                <p className="text-[16px] max-sm:text-[13px] text-center text-white p-[10px] py-[5px] max-sm:w-[120px] w-[145px] border-2 border-blue-700 bg-blue-700 hover:bg-blue-800 rounded-lg ">
                  Login
                </p>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
     
    </>
  );
};

export default Teachlogin;
